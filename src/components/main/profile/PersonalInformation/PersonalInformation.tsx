import React from 'react';
import s from './PersonalInformation.module.css'
import {ProfilePageType} from '../../../../redux/profile-pages-reducer';

type PropsType = {
    profile: ProfilePageType
}

const PersonalInformation = (props: PropsType) => {


    return (<div className={s.personalInformation}>
            <div className={s.personalInformationTitle}>Personal page</div>
            <div className={s.personalInformationInfo}>
                <img
                    src={props.profile.photos.small || 'https://www.google.com/url?sa=i&url=https%3A%2F%2Flapkins.ru%2Fdog%2Fmops%2F&psig=AOvVaw2C3vMk_fCn2wu3djcdJg0p&ust=1673895063276000&source=images&cd=vfe&ved=0CBAQjRxqFwoTCOCu5ZafyvwCFQAAAAAdAAAAABAE'}/>
                <div className={s.info}>
                    <div className={s.infoName}> {'Name: ' + props.profile.fullName}</div>
                    <div className={s.aboutMe}> {'About me: ' + props.profile.aboutMe}</div>
                    <div
                        className={s.jobStatus}>{props.profile.lookingForAJob && 'Looking for a job status: ' + props.profile.lookingForAJobDescription}</div>
                    <div className={s.info_contacts}>
                        {props.profile.contacts && <div className={s.contactsTitle}> Contacts:</div>}
                        <div className={s.info_contactsOptions}>
                            {props.profile.contacts.facebook && <div>{props.profile.contacts.facebook}</div>}
                            {props.profile.contacts.youtube && <div>{props.profile.contacts.youtube}</div>}
                            {props.profile.contacts.github && <div>{props.profile.contacts.github}</div>}
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );

};

export default PersonalInformation;