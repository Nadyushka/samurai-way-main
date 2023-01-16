import React from 'react';
import s from './profile.module.css'
import PersonalInformation from "./PersonalInformation/PersonalInformation";
import PostsContainer from "./Posts/PostsContainer";
import Preloader from "../../commonComponents/preloader/Preloader";
import {ProfilePageType} from '../../../redux/profile-pages-reducer';


// type Test = {
//     first: boolean
//     second: boolean
// }
//
// type Name = keyof Test

type PropsType = {
    profile: ProfilePageType | null
}

const Profile = (props: PropsType) => {

    console.log(props.profile)
    if (!props.profile) {
        return <Preloader/>
    }


    // const handleChange = (value: boolean, name: string) => {
    //     const newState = {...state}
    //     newState[name as Name] = value
    //     setState(newState)
    // }

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