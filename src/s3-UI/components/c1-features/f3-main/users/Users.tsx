import React from 'react';
import {UserType} from "../../../../../s2-BLL/users-page-reducer";
import User from './user/User';
import s from './users.module.css'
import Paginator from "../../../c2-commonComponents/paginator/Paginator";

type PropsType = {
    users: UserType[]
    pageSize: number
    totalUsersCont: number
    currentPage: number
    followingInProgress: Array<any>
    follow: (id: number) => void
    unfollow: (id: number) => void
    changePage: (pageNumber: number) => void
}

const Users = (props: PropsType) => {

    return (
        <div>
            <Paginator pageSize={props.pageSize}
                       currentPage={props.currentPage}
                       changePage={props.changePage}
                       totalItemCount={props.totalUsersCont}
                       portionSize={10}/>
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
                />)
            })}
        </div>
    );
}

export default Users;