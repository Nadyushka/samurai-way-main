import React from 'react';
import s from "./user.module.css"
import {UserType} from "../../../../redux/users-page-reducer";

const User = (props: UserType) => {

       return (
        <div className={s.user}>
            <div className={s.user_photo}>
                <img src='https://i.pinimg.com/736x/1e/e4/9c/1ee49c569ceea55206d0c05bdaa8be32.jpg' alt='photo'/>
                <button>{props.follow === false ? 'Follow' : 'Unfollow'}</button>
            </div>
            <div className={s.user_info}>
                <div className={s.user_personalData}>
                    <div className={s.user_fullName}>
                        <div>{props.fullName.name}</div>
                        <div>{props.fullName.surname}</div>
                    </div>
                    <div className={s.user_location}>
                        <div>{props.address.city}</div>
                        <div>{props.address.country}</div>
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