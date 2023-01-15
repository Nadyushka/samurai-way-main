import React from 'react';
import s from './profile.module.css'
import PersonalInformation from "./PersonalInformation/PersonalInformation";
import PostsContainer from "./Posts/PostsContainer";
import Preloader from "../../commonComponents/preloader/Preloader";
import {ProfilePageType} from '../../../redux/profile-pages-reducer';

type PropsType = {
    profile: ProfilePageType
}

const Profile = (props: PropsType) => {


    if (!props.profile) {
        return <Preloader/>
    }

    return (
        <div className={s.profile}>
            <img
                src='https://img.poehalisnami.kz/static/psn/hotelreviews/r326961/orig/326961_638018749523431298.jpg'/>
            <PersonalInformation profile={props.profile}/>
            <PostsContainer/>
        </div>
    );

}


export default Profile;