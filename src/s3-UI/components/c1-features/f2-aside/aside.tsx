import React from 'react';
import s from './aside.module.css';
import {NavLink, useLocation} from "react-router-dom";


const Aside = () => {

    const location = useLocation();
    const { pathname } = location;
    const splitLocation = pathname.split("/");

    return (
        <div className={s.aside}>
            <div><NavLink to='/f3-main/profile' activeClassName={s.activeLink} className={splitLocation[1] === "f3-main/profile" ? "s.activeLink" : ""}> Profile </NavLink></div>
            <div><NavLink to='/f3-main/messages' activeClassName={s.activeLink} className={splitLocation[1] === "f3-main/messages" ? "s.activeLink" : ""}> Messages </NavLink></div>
            <div><NavLink to={''}>News</NavLink></div>
            <div><NavLink to={''}>Music</NavLink></div>
            <br/>
            <br/>
            <div><NavLink to='/f3-main/users' activeClassName={s.activeLink} className={splitLocation[1] === "f3-main/users" ? "s.activeLink" : ""}> Users </NavLink></div>
            <br/>
            <div><NavLink to={''}>Settings</NavLink></div>
        </div>
    );
};

export default Aside;