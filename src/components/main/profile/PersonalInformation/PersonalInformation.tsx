import React from 'react';
import s from './PersonalInformation.module.css'
import {ProfilePageType} from '../../../../redux/profile-pages-reducer';
import Preloader from "../../../commonComponents/preloader/Preloader";

type PropsType = {
    profile: ProfilePageType | null
}

const PersonalInformation = (props: PropsType) => {
    const {profile} = props
    // console.log('profile', profile)

    return (<div className={s.personalInformation}>
            <div className={s.personalInformationTitle}>Personal page</div>
            <div className={s.personalInformationInfo}>
                <img src={
                    profile?.photos.small
                        ? profile.photos.small
                        : 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fru.wallpaper.mob.org%2Fgallery%2Ftag%3D%25D0%25BC%25D0%25BE%25D0%25BF%25D1%2581%2F&psig=AOvVaw3A94uiD8oaR__AE144_gu4&ust=1673976395261000&source=images&cd=vfe&ved=0CA8QjRxqFwoTCOD1l5TOzPwCFQAAAAAdAAAAABAE'
                }/>

                <div className={s.info}>
                    <div className={s.infoName}> {'Name: ' + profile?.fullName}</div>
                    <div className={s.aboutMe}> {'About me: ' + profile?.aboutMe}</div>
                    <div
                        className={s.jobStatus}>{profile?.lookingForAJob && 'Looking for a job status: ' + profile.lookingForAJobDescription}</div>
                    <div className={s.info_contacts}>
                        {profile?.contacts && <div className={s.contactsTitle}> Contacts:</div>}
                        <div className={s.info_contactsOptions}>
                            {profile?.contacts.facebook && <div>{profile.contacts.facebook}</div>}
                            {profile?.contacts.youtube && <div>{profile.contacts.youtube}</div>}
                            {profile?.contacts.github && <div>{profile.contacts.github}</div>}
                            {profile?.contacts.youtube && <div>{profile.contacts.youtube}</div>}
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );

};

export default PersonalInformation;