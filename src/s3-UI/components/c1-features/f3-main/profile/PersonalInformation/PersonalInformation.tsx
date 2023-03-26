import React, {ChangeEvent} from 'react';
import s from './PersonalInformation.module.css'
import {ProfilePageType} from '../../../../../../s2-BLL/profile-pages-reducer';
import Preloader from "../../../../c2-commonComponents/preloader/Preloader";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import ProfileStatusWithHook from "./ProfileStatus/ProfileStatusWithHook";


type PropsType = {
    profile: ProfilePageType | null
    status: string | null
    updateStatus: (status: string) => void
    isOwner: boolean
    onChangePhoto: (photo: File) => void
}

const PersonalInformation = (props: PropsType) => {

    const {profile} = props

    const onProfilePhotoChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            props.onChangePhoto(e.target.files[0])
        }
    }

    return (
        <div className={s.personalInformation}>
            <div className={s.personalInformationTitle}>Personal page</div>
            <div className={s.personalInformationInfo}>
                <img src={
                    profile?.photos.small
                        ? profile.photos.small
                        : 'https://i.pinimg.com/736x/1e/e4/9c/1ee49c569ceea55206d0c05bdaa8be32.jpg'
                }/>
                {props.isOwner && <input type={'file'} onChange={onProfilePhotoChangeInput}/>}
                <div className={s.info}>
                    <div className={s.infoName}> {'Name: ' + profile?.fullName}</div>
                    <div className={s.aboutMe}> {'About me: ' + profile?.aboutMe}</div>
                    <ProfileStatusWithHook status={props.status} updateStatus={props.updateStatus}/>
                    <div
                        className={s.jobStatus}>Looking for a job status:{profile?.lookingForAJob ? ' yes' : ' no'}</div>
                    <div className={s.info_contacts}>
                        {profile?.contacts && <div className={s.contactsTitle}> Contacts:</div>}
                        <div className={s.info_contactsOptions}>
                            {profile?.contacts.facebook && <div>{profile.contacts.facebook}</div>}
                            {profile?.contacts.youtube && <div>{profile.contacts.youtube}</div>}
                            {profile?.contacts.github && <div>{profile.contacts.github}</div>}
                            {profile?.contacts.vk && <div>{profile.contacts.vk}</div>}
                            {profile?.contacts.instagram && <div>{profile.contacts.instagram}</div>}
                            {profile?.contacts.website && <div>{profile.contacts.website}</div>}
                            {profile?.contacts.twitter && <div>{profile.contacts.twitter}</div>}
                            {profile?.contacts.mainLink && <div>{profile.contacts.mainLink}</div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );

};

export default PersonalInformation;