import React from 'react';
import s from './contacts.module.css'
import {NavLink} from "react-router-dom";

const Contacts = () => {
    return (
        <div className={s.contacts}>
            <div className={s.contact + ' ' + s.active}><NavLink exact to='/main/messages/1'>John</NavLink></div>
            <div className={s.contact}><NavLink exact to='/main/messages/2'>Peter</NavLink></div>
            <div className={s.contact}><NavLink exact to='/main/messages/3'>Alexa</NavLink></div>
            <div className={s.contact}><NavLink exact to='/main/messages/4'>Sandra</NavLink></div>
            <div className={s.contact}><NavLink exact to='/main/messages/5'>Anrew</NavLink></div>
        </div>
    );
};

export default Contacts;