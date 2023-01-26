import React from 'react';
import s from "./user.module.css"
import {UserType} from "../../../../redux/users-page-reducer";
import {NavLink} from "react-router-dom";
import axios from "axios";

type PropsType = UserType & {
    followF: (id: number) => void
    unFollowF: (id: number) => void
    followingInProgress: Array<any>
    toggleIsFollowingInProgress:(isFollowing: boolean,id:number) => void
}

const User = (props: PropsType) => {

    const ButtonOnClickHandler = () => {

        props.toggleIsFollowingInProgress(true, props.id)

        if (props.followed === false) {

            axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,
                {},
                {withCredentials: true})

                .then(response => {
                    if (response.data.resultCode === 0) {
                        props.followF(props.id)
                        props.toggleIsFollowingInProgress(false,props.id)
                    }
                })


        } else {

            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${props.id}`,
                {withCredentials: true})

                .then(response => {
                    if (response.data.resultCode === 0) {
                        props.unFollowF(props.id)
                        props.toggleIsFollowingInProgress(false,props.id)
                    }
                })

        }
    }

    return (
        <div className={s.user}>
            <div className={s.user_photo}>
                <NavLink to={'/main/profile/' + props.id}>
                    <img
                        src={props.photos.small ? props.photos.small : 'https://i.pinimg.com/736x/1e/e4/9c/1ee49c569ceea55206d0c05bdaa8be32.jpg'}
                        alt='photo'/>
                </NavLink>
                <button disabled={props.followingInProgress.some(el=> el === props.id)} onClick={ButtonOnClickHandler}>{props.followed === false ? 'Follow' : 'Unfollow'}</button>
            </div>
            <div className={s.user_info}>
                <div className={s.user_personalData}>
                    <div className={s.user_fullName}>
                        <span>{props.name}</span>
                        <span>{' '}</span>
                        {/*<span>{props.fullName.surname}</span>*/}
                    </div>
                    <div className={s.user_location}>
                        {/*<div>{props.address.city}</div>*/}
                        {/*<div>{props.address.country}</div>*/}
                    </div>
                </div>
                <div className={s.user_status}>
                    {props.status}
                </div>
            </div>
        </div>
    );
};

export default User