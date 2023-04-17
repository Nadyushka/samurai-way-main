import React, {ChangeEvent, createRef, useState} from 'react';
import s from './PersonalInformation.module.css'
import {ProfilePageType} from '../../../../../../s2-BLL/profile-pages-reducer';
import {ProfileInfo} from "./ProfileInfo/ProfileInfo";
import ProfileEditableInfo from "./ProfileEtditableInfo/ProfileEditableInfo";
import {profileType} from "../../../../../../s1-DAL/api";
import editInfoPen from '../../../../../../s4-common/assets/pictures/editInfoIcon.png'
import changeProfileImg from '../../../../../../s4-common/assets/pictures/changeBg.png'

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
    const inputRef = createRef<HTMLInputElement>()

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
            <div className={s.personalInformationTitle}>Personal page
                {props.isOwner &&
                    <img src={editInfoPen} className={s.personalInformation_img} onClick={buttonChangeModeHandler}/>
                }
            </div>
            <div className={s.personalInformationInfo}>
                <div className={s.personalInformationInfo_edit} >
                    <img
                        className={s.personalInformation_profileImg}
                        src={
                            props.profile?.photos.small
                                ? props.profile.photos.small
                                : 'https://i.pinimg.com/736x/1e/e4/9c/1ee49c569ceea55206d0c05bdaa8be32.jpg'
                        }/>
                    <div className={s.personalInformationInfo_updateProfileImg}>
                        {props.isOwner && <img src={changeProfileImg}
                                               onClick={() => inputRef && inputRef.current && inputRef.current.click()}/>}
                    </div>
                    <input type={'file'} style={{display: 'none'}} accept=".jpg, .jpeg, .png" ref={inputRef}
                           onChange={onProfilePhotoChangeInput}/>

                </div>
                <div className={s.info}>

                    <ProfileInfo isOwner={props.isOwner} profile={props.profile} status={props.status} updateStatus={props.updateStatus}/>
                    {editableMode && <ProfileEditableInfo profile={props.profile} toggleMode={setEditableMode}
                                                          saveProfile={props.saveProfile}/>}


                </div>
            </div>
        </div>
    );

};

export default PersonalInformation;