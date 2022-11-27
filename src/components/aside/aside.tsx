import React from 'react';
import s from './aside.module.css';

const Aside = () => {
    return (
        <div className={s.aside}>
            <div><a href='/main/profile'> Profile </a></div>
            <div><a href='/main/messages'> Messages </a></div>
            <div>News</div>
            <div>Music</div>
            <br/>
            <div>Settings</div>
        </div>
    );
};

export default Aside;