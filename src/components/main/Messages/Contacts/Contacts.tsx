import React from 'react';
import s from './contacts.module.css'
import {NavLink} from "react-router-dom";
import Contact from "./Contact/Contact";

const Contacts = () => {

    type contactDataType = {
        id: number
        name: string
    }

    let contactData: Array<contactDataType> = [
        {id: 1, name: 'Bison'},
        {id: 2, name: 'John'},
        {id: 3, name: 'Alexa'},
        {id: 4, name: 'Peter'},
        {id: 5, name: 'Sandra'}]

    return (
        <div className={s.contacts}>
            {contactData.map(contact => <Contact name={contact.name} id={contact.id}/>)}


        </div>
    );
};

export default Contacts;