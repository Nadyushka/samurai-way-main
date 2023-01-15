import React from 'react';
import {UserType} from "../../../redux/users-page-reducer";
import User from './user/User';
import axios from 'axios'
import s from './users.module.css'

type PropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCont: number
    currentPage: number
    follow: (id: number) => void
    unFollow: (id: number) => void
    setUsers: (newUsers: UserType[]) => void
    setTotalUsersCount: (totalCount: number) => void
    setCurrentPage: (newCurrentPage: number) => void
}

class Users extends React.Component<PropsType, any> {


    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)

        })
    }


    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCont / this.props.pageSize)

        let pages = []
        for (let i = 1; i <= pagesCount; i++) {
            pages.push(i)
        }

        const changePage = (pageNumber: number) => {
            this.props.setCurrentPage(pageNumber)
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response =>
                this.props.setUsers(response.data.items)
            )
        }

        return (
            <div>
                {pages.map((p,i) => {
                    return (
                        <span key={i} onClick={() => changePage(p)}
                              className={this.props.currentPage === p ? s.activePage : s.notActivePage}>{p}</span>
                    )
                })}
                {this.props.users.map(el => {
                    return (<User key={el.id}
                                  name={el.name}
                                  id={el.id}
                                  photos={el.photos}
                                  status={el.status}
                                  followed={el.followed}
                                  followF={this.props.follow}
                                  unFollowF={this.props.unFollow}
                    />)
                })}
            </div>
        );
    }
}

export default Users;