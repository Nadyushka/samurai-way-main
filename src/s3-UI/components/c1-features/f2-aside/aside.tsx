import React from 'react';
import s from './aside.module.css';
import {NavLink} from "react-router-dom";


const Aside = () => {
    return (
        <div className={s.aside}>
            <div><NavLink to='/f3-main/profile' > Profile </NavLink></div>
            <div><NavLink to='/f3-main/messages'> Messages </NavLink></div>
            <div>News</div>
            <div>Music</div>
            <br/>
            <br/>
            <div><NavLink to='/f3-main/users' > Users </NavLink></div>
            <br/>
            <div>Settings</div>
        </div>
    );
};

export default Aside;