import React from 'react';
import s from "../PersonalInformation.module.css";
import {ProfilePageType} from "../../../../../../../s2-BLL/profile-pages-reducer";

type PropsType = {
    profile: ProfilePageType | null
}

export const ProfileInfo = ({profile}:PropsType) => {
    return (
        <div>
            <div className={s.infoName}> {'Name: ' + profile?.fullName}</div>
            <div className={s.aboutMe}> {'About me: ' + profile?.aboutMe}</div>

            <div
                className={s.jobStatus}>Looking for a job
                status:{profile?.lookingForAJob ? ' yes' : ' no'}
            </div>
            {profile?.lookingForAJob && <div>Job description: {profile.lookingForAJobDescription}</div>}

            <div className={s.info_contacts}>
                {Object.values(profile!.contacts).every(k => typeof k === 'string' && k.length > 0) &&
                    <div className={s.contactsTitle}> Contacts:</div>}
                <div className={s.info_contactsOptions}>
                    {profile?.contacts.facebook && <div>Facebook: {profile.contacts.facebook}</div>}
                    {profile?.contacts.youtube && <div>Youtube: {profile.contacts.youtube}</div>}
                    {profile?.contacts.github && <div>Github: {profile.contacts.github}</div>}
                    {profile?.contacts.vk && <div>VK: {profile.contacts.vk}</div>}
                    {profile?.contacts.instagram && <div>Instagram: {profile.contacts.instagram}</div>}
                    {profile?.contacts.website && <div>Website: {profile.contacts.website}</div>}
                    {profile?.contacts.twitter && <div>Twitter: {profile.contacts.twitter}</div>}
                    {profile?.contacts.mainLink && <div>Main Link: {profile.contacts.mainLink}</div>}

                </div>
            </div>
        </div>
    );
};

