import React from 'react';
import s from "../PersonalInformation.module.css";
import {ProfilePageType} from "../../../../../../../s2-BLL/profile-pages-reducer";
import facebookItem from "../../../../../../../s4-common/assets/pictures/facebook.svg"
import youtubeItem from "../../../../../../../s4-common/assets/pictures/youtube.svg"
import githubItem from "../../../../../../../s4-common/assets/pictures/github.svg"
import vkItem from "../../../../../../../s4-common/assets/pictures/vk.png"
import instagramItem from "../../../../../../../s4-common/assets/pictures/instagram.svg"
import websiteItem from "../../../../../../../s4-common/assets/pictures/website.png"
import twitterItem from "../../../../../../../s4-common/assets/pictures/twitter.svg"
import ProfileStatusWithHook from "../ProfileStatus/ProfileStatusWithHook";

type PropsType = {
    profile: ProfilePageType | null
    status: string | null
    updateStatus: (status: string) => void
}

export const ProfileInfo = ({profile, status, updateStatus}: PropsType) => {
    return (
        <div>
            <div className={s.infoName} style={{fontWeight: 600}}> {profile?.fullName}</div>
            <div className={s.infoStatus}>
                <span className={s.statusInfo}>
                    <ProfileStatusWithHook status={status} updateStatus={updateStatus}/>
                </span>
            </div>
            <div className={s.aboutMe}> {profile?.aboutMe}</div>

            {profile?.lookingForAJob && <div style={{marginTop: '10px', marginBottom: '10px', fontWeight: 500}}>I am looking fod a job: {profile.lookingForAJobDescription}</div>}

            <div className={s.info_contacts}>
                {Object.values(profile!.contacts).every(k => typeof k === 'string' && k.length > 0) &&
                    <div className={s.contactsTitle}> Contacts:</div>}
                <div className={s.info_contactsOptions}>
                    {profile?.contacts.facebook &&
                        <a target={'_blank'} href={profile.contacts.facebook} className={s.info_contactsOption}><img
                            src={facebookItem}/></a>}
                    {profile?.contacts.youtube &&
                        <a target={'_blank'} href={profile.contacts.youtube} className={s.info_contactsOption}><img
                            src={youtubeItem}/></a>}
                    {profile?.contacts.github &&
                        <a target={'_blank'} href={profile.contacts.github} className={s.info_contactsOption}><img
                            src={githubItem}/></a>}
                    {profile?.contacts.vk &&
                        <a target={'_blank'} href={profile.contacts.vk} className={s.info_contactsOption}><img
                            src={vkItem}/></a>}
                    {profile?.contacts.instagram &&
                        <a target={'_blank'} href={profile.contacts.instagram} className={s.info_contactsOption}><img
                            src={instagramItem}/></a>}
                    {profile?.contacts.website &&
                        <a target={'_blank'} href={profile.contacts.website} className={s.info_contactsOption}><img
                            src={websiteItem}/></a>}
                    {profile?.contacts.twitter &&
                        <a target={'_blank'} href={profile.contacts.twitter} className={s.info_contactsOption}><img
                            src={twitterItem}/></a>}
                    {/*{profile?.contacts.mainLink && <div>Main Link: {profile.contacts.mainLink}</div>}*/}

                </div>
            </div>
        </div>
    );
};

