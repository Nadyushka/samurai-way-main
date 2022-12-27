import React from 'react';
import s from './profile.module.css'
import PersonalInformation from "./PersonalInformation/PersonalInformation";
import Posts from "./Posts/Posts";
import {dispatchTypes, profilePagesType} from "../../../redux/state";
import PostsContainer from "./Posts/PostsContainer";

type PropsType = {
    profilePages: profilePagesType
    dispatch: (action: dispatchTypes)=> void

}

const Profile = (props: PropsType) => {
    return (
        <div className={s.profile}>
            <img src='https://img.poehalisnami.kz/static/psn/hotelreviews/r326961/orig/326961_638018749523431298.jpg'/>
            <PersonalInformation/>
            <PostsContainer posts={props.profilePages} newPost={props.profilePages.newPost} dispatch={props.dispatch} />
        </div>
    );
};

export default Profile;