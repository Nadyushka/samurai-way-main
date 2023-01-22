import React from 'react';
import {UserType} from "../../../redux/users-page-reducer";
import axios from 'axios'
import Users from "./Users";

type PropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCont: number
    currentPage: number
    follow: (id: number) => void
    unfollow: (id: number) => void
    setUsers: (newUsers: UserType[]) => void
    setTotalUsersCount: (totalCount: number) => void
    setCurrentPage: (newCurrentPage: number) => void
    toggleIsFetching: (isFetching: boolean) => void
    toggleIsFollowingInProgress: (isFollowing: boolean) => void
}

class UsersApiComponent extends React.Component<PropsType, any> {


    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items)
            this.props.setTotalUsersCount(response.data.totalCount)

        })
    }

    changePage = (pageNumber: number) => {
        this.props.setCurrentPage(pageNumber)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response =>
            this.props.setUsers(response.data.items)
        )
    }

    // render() {
    //
    //
    //
    //     // return <Users users={this.props.users}
    //     //               pageSize={this.props.pageSize}
    //     //               totalUsersCont={this.props.totalUsersCont}
    //     //               currentPage={this.props.currentPage}
    //     //               follow={this.props.follow}
    //     //               unfollow={this.props.unfollow}
    //     //               changePage={this.changePage}
    //     // />
    // }
}

export default UsersApiComponent;