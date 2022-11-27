import React from 'react';
import s from './contacts.module.css'
import {NavLink} from "react-router-dom";
import Contact from "./Contact/Contact";
import {contactDataType} from './../../../../index'

type ContactsPropsType = {
    contactData: contactDataType[]
}

const Contacts = (props:ContactsPropsType) => {

    return (
        <div className={s.contacts}>
            {props.contactData.map(contact => <Contact name={contact.name} id={contact.id}/>)}
        </div>
    );
};

export default Contacts;