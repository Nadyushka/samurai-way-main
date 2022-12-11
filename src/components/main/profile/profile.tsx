import React from 'react';
import s from './profile.module.css'
import PersonalInformation from "./PersonalInformation/PersonalInformation";
import Posts from "./Posts/Posts";
import {profilePagesType} from "../../../redux/state";

type PropsType = {
    profilePages: profilePagesType
    addPost: (newPost: string) => void
    changeNewPost: (newPost: string) => void

}

const Profile = (props: PropsType) => {
    return (
        <div className={s.profile}>
            <img src='https://img.poehalisnami.kz/static/psn/hotelreviews/r326961/orig/326961_638018749523431298.jpg'/>
            <PersonalInformation/>
            <Posts posts={props.profilePages} newPost={props.profilePages.newPost} addPost={props.addPost} changeNewPost={props.changeNewPost}/>
        </div>
    );
};

export default Profile;