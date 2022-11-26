import React from 'react';
import s from './aside.module.css';

const Aside = () => {
    return (
        <div className={s.aside}>
            <div>Profile</div>
            <div>Messages</div>
            <div>News</div>
            <div>Music</div>
            <br/>
            <div>Settings</div>
        </div>
    );
};

export default Aside;