import React from 'react';
import s from './profile.module.css'
import PersonalInformation from "./PersonalInformation/PersonalInformation";
import Posts from "./Posts/Posts";


const Profile = () => {
    return (
        <div className={s.profile}>
            <img src='https://img.poehalisnami.kz/static/psn/hotelreviews/r326961/orig/326961_638018749523431298.jpg'/>
            <PersonalInformation/>
            <Posts/>
        </div>
    );
};

export default Profile;