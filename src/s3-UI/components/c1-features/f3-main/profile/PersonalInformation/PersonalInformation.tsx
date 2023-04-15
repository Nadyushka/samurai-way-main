import React, {ChangeEvent, useState} from 'react';
import s from './PersonalInformation.module.css'
import {ProfilePageType} from '../../../../../../s2-BLL/profile-pages-reducer';
import ProfileStatusWithHook from "./ProfileStatus/ProfileStatusWithHook";
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import ProfileEditableInfo from "./ProfileEtditableInfo/ProfileEditableInfo";
import {profileType} from "../../../../../../s1-DAL/api";


type PropsType = {
    profile: ProfilePageType | null
    status: string | null
    updateStatus: (status: string) => void
    isOwner: boolean
    onChangePhoto: (photo: File) => void
    saveProfile: (profile: profileType) => void
}

const PersonalInformation = (props: PropsType) => {

    const [editableMode, setEditableMode] = useState<boolean>(false)

    const onProfilePhotoChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files) {
            props.onChangePhoto(e.target.files[0])
        }
    }

    const buttonChangeModeHandler = () => {
        setEditableMode(true)
    }

    return (
        <div className={s.personalInformation}>
            <span>Status:  </span><ProfileStatusWithHook status={props.status} updateStatus={props.updateStatus}/>
            <div className={s.personalInformationTitle}>Personal page
                {props.isOwner &&  <button
                    onClick={buttonChangeModeHandler}
                    style={editableMode ? {visibility: 'hidden'} : {visibility: 'visible'}}
                    className={s.personalInformationInfo_buttonEdit}>
                    Edit information
                </button> }
            </div>
            <div className={s.personalInformationInfo}>
                <div className={s.personalInformationInfo_edit}>
                    <img src={
                        props.profile?.photos.small
                            ? props.profile.photos.small
                            : 'https://i.pinimg.com/736x/1e/e4/9c/1ee49c569ceea55206d0c05bdaa8be32.jpg'
                    }/>

                    {props.isOwner && <input type={'file'} onChange={onProfilePhotoChangeInput}/>}

                </div>
                <div className={s.info}>

                    <ProfileInfo profile={props.profile}/>
                    {editableMode && <ProfileEditableInfo profile={props.profile} toggleMode={setEditableMode}
                                                          saveProfile={props.saveProfile}/>}


                </div>
            </div>
        </div>
    );

};

export default PersonalInformation;