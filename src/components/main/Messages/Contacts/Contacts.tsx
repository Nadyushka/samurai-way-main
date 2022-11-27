import React from 'react';
import s from './contacts.module.css'
import Contact from "./Contact/Contact";
import {state} from "../../../../redux/state";

const Contacts = () => {

    return (
        <div className={s.contacts}>
            {state.messagePages.contacts.map(contact => <Contact name={contact.name} id={contact.id}/>)}
        </div>
    );
};

export default Contacts;