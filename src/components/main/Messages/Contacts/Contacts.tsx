import React from 'react';
import s from './contacts.module.css'
import {NavLink} from "react-router-dom";
import Contact from "./Contact/Contact";

const Contacts = () => {
    return (
        <div className={s.contacts}>
            <Contact name={'Bison'} id={1}/>
            <Contact name={'John'} id={2}/>
            <Contact name={'Alexa'} id={3}/>
            <Contact name={'Peter'} id={4}/>
            <Contact name={'Sandra'} id={5}/>

        </div>
    );
};

export default Contacts;