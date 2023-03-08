import React from 'react';
import {UserType} from "../../../redux/users-page-reducer";
import User from './user/User';
import s from './users.module.css'
import Paginator from "../../commonComponents/paginator/Paginator";

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
            <Paginator pageSize={props.pageSize} totalUsersCont={props.totalUsersCont} currentPage={props.currentPage}
                       changePage={props.changePage}/>
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