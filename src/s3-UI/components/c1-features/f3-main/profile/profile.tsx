import React, {ChangeEvent, createRef, useState} from 'react';
import s from './profile.module.css'
import PersonalInformation from "./PersonalInformation/PersonalInformation";
import PostsContainer from "./Posts/PostsContainer";
import Preloader from "../../../c2-commonComponents/preloader/Preloader";
import {ProfilePageType} from '../../../../../s2-BLL/profile-pages-reducer';
import {profileType} from "../../../../../s1-DAL/api";
import changeBg from '../../../../../s4-common/assets/pictures/changeBg.png'
import {convertFileToBase64} from "../../../../../s4-common/utils/image-loader-utils";


type PropsType = {
    profile: ProfilePageType | null
    status: string | null
    updateStatus: (status: string) => void
    isOwner: boolean
    onChangePhoto: (photo: File) => void
    saveProfile: (profile: profileType) => void
}

const Profile = (props: PropsType) => {

    const [toggleChangeBg, setToggleChangeBg] = useState<boolean>(false)
    const [bgImage, setBgImage] = useState<string>('');

    if (!props.profile) {return <Preloader/>}

    const inputRef = createRef<HTMLInputElement>()
    const uploadHandler = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files.length) {
            const file = e.target.files[0]

            if (file.size < 1000000) {
                convertFileToBase64(file, fileName => setBgImage(fileName))
            }
        }
    };

    const finalBgImg = bgImage ? bgImage :'https://img.poehalisnami.kz/static/psn/hotelreviews/r326961/orig/326961_638018749523431298.jpg'

    return (
        <div className={s.profile}>
            <img
                onClick={() => setToggleChangeBg(!toggleChangeBg)}
                src={finalBgImg}/>
            <div
                className={toggleChangeBg ? `${s.profile_changeBg} ${s.profile_changeBg_active}` : `${s.profile_changeBg}`}
                onClick={() => inputRef && inputRef.current && inputRef.current.click()}
            >
                <img src={changeBg}/>
            </div>
            <input type={'file'} style={{display:"none"}} accept=".jpg, .jpeg, .png" ref={inputRef}  onChange={uploadHandler}/>
            <PersonalInformation profile={props.profile}
                                 status={props.status}
                                 updateStatus={props.updateStatus}
                                 isOwner={props.isOwner}
                                 onChangePhoto={props.onChangePhoto}
                                 saveProfile={props.saveProfile}
            />
            <PostsContainer/>
        </div>
    );
}


export default Profile;