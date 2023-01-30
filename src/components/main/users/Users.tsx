import React from 'react';
import {UserType} from "../../../redux/users-page-reducer";
import User from './user/User';
import s from './users.module.css'

type PropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCont: number
    currentPage: number
    followingInProgress:Array<any>
    follow: (id: number) => void
    unfollow: (id: number) => void
    // toggleIsFollowingInProgress:(isFollowing: boolean,id:number) => void
    changePage:(pageNumber: number) => void
}


const Users = (props:PropsType) => {


    let pagesCount = Math.ceil(props.totalUsersCont / props.pageSize)

    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div>
            {pages.map((p,i) => {
                return (
                    <span key={p} onClick={() => props.changePage(p)}
                          className={props.currentPage === p ? s.activePage : s.notActivePage}>{p}</span>
                )
            })}
            {props.users.map(el => {
                return (<User key={el.id}
                              name={el.name}
                              id={el.id}
                              photos={el.photos}
                              status={el.status}
                              followed={el.followed}
                              followingInProgress={props.followingInProgress}
                              follow={props.follow}
                              unfollow={props.unfollow}
                              // toggleIsFollowingInProgress={props.toggleIsFollowingInProgress}
                />)
            })}
        </div>
    );
}

export default Users;