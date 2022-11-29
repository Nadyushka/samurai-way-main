import React from 'react';
import s from './aside.module.css';
import {NavLink} from "react-router-dom";


const Aside = () => {
    return (
        <div className={s.aside}>
            <div><NavLink to='/main/profile'> Profile </NavLink></div>
            <div><NavLink to='/main/messages'> Messages </NavLink></div>
            <div>News</div>
            <div>Music</div>
            <br/>
            <div>Settings</div>
        </div>
    );
};

export default Aside;