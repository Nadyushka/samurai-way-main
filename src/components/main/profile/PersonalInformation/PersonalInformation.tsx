import React from 'react';
import s from './PersonalInformation.module.css'
import Posts from "../Posts/Posts";


const PersonalInformation = () => {
    return (<div className={s.personalInformation}>
            <div className={s.personalInformationTitle}>My posts</div>
            <div className={s.personalInformationInfo}>
                <img
                    src='data:image/jpeg;base64,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'/>
                <div className={s.info}>
                    <div className={s.infoName}>Name: Nadya</div>
                    <div className={s.dafeOfBirth}>Date of birth: 12 Nov 1993</div>
                    <div className={s.infoCity}>City: Minsk</div>
                    <div className={s.infoEducation}>Education: BNTY 2016</div>
                    <div className={s.infoWebSite}> Web-site: no</div>
                </div>
            </div>

            <div className={s.addInfoInput}>
                <input placeholder='Share your news'/>
                <button> Add posts </button>
            </div>
        </div>
    )
        ;
};

export default PersonalInformation;