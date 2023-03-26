import {useFormik} from 'formik';
import React from 'react';
import {ProfilePageType} from "../../../../../../../s2-BLL/profile-pages-reducer";
import s from './ProfileEditableInfo.module.css'
import {profileType} from "../../../../../../../s1-DAL/api";

type PropsType = {
    profile: ProfilePageType | null
    toggleMode: (value: boolean) => void
    saveProfile: (profile: profileType) => void
}

type FormikErrorType = {
    fullName?: string
    aboutMe?: string
}

const ProfileEditableInfo = ({profile, toggleMode, saveProfile}: PropsType) => {

    const formik = useFormik({
        initialValues: {
            fullName: profile!.fullName,
            aboutMe: profile!.aboutMe,
            lookingForAJob: profile!.lookingForAJob,
            lookingForAJobDescription: profile?.lookingForAJobDescription || '',
            contacts: {
                facebook: profile?.contacts.facebook || '',
                youtube: profile?.contacts.youtube || '',
                github: profile?.contacts.github || '',
                vk: profile?.contacts.vk || '',
                instagram: profile?.contacts.instagram || '',
                website: profile?.contacts.website || '',
                twitter: profile?.contacts.twitter || '',
                mainLink: profile?.contacts.mainLink || '',
            }
        },
        validate: (values) => {
            const errors: FormikErrorType = {}
            if (!values.aboutMe) {
                errors.aboutMe = 'About Me required'
            }
            if (!values.fullName) {
                errors.fullName = 'Name required'
            }

            return errors
        },
        onSubmit: values => {
            saveProfile({userId: profile!.userId, ...values})
            formik.resetForm();
            toggleMode(false)
        },
    })


    return (<div className={s.editableInfo}>
            <div className={s.editableInfo_container}>
                <form onSubmit={formik.handleSubmit}>
                    <button type={'submit'}>Submit data</button>
                    <div>
                        <label htmlFor="fullName">Full name: </label>
                        <input
                            type="text"
                            id={"fullName"}
                            {...formik.getFieldProps('fullName')}
                        />
                    </div>
                    {formik.touched.fullName && formik.errors.fullName &&
                        <div style={{color: 'red'}}>{formik.errors.fullName}</div>}
                    <div>
                        <label htmlFor="aboutMe">About me: </label>
                        <input
                            id={'aboutMe'}
                            type="text"
                            {...formik.getFieldProps('aboutMe')}
                        />
                    </div>
                    {formik.touched.aboutMe && formik.errors.aboutMe &&
                        <div style={{color: 'red'}}>{formik.errors.aboutMe}</div>}
                    <div>
                        <label htmlFor="lookingForAJob">looking for a job: </label>
                        <input
                            id={'lookingForAJob'}
                            type="checkbox"
                            {...formik.getFieldProps('lookingForAJob')}
                        />
                    </div>
                    <div>
                        {formik.values.lookingForAJob && <div>
                            <label htmlFor="lookingForAJobDescription">Job description: </label>
                            <input
                                id={'lookingForAJobDescription'}
                                type="text"
                                {...formik.getFieldProps('lookingForAJobDescription')}
                            />
                        </div>}
                    </div>
                    <div>
                        <div>Contacts:</div>
                    </div>

                    <div className={s.info_contacts}>

                        {Object.keys(formik.values.contacts).map((c: string) => {
                            return <div key={c}>
                                <label htmlFor={c}>{c}: </label>
                                <input
                                    id={c}
                                    type="url"
                                    {...formik.getFieldProps(`contacts.` + c)}
                                />
                            </div>

                        })}
                    </div>
                </form>
            </div>
        </div>
    );
};

export default ProfileEditableInfo;


