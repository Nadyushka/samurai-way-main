import React from 'react';
import s from './contacts.module.css'
import Contact from "./Contact/Contact";
import {contactDataType} from "./ContactsContainer";


type PropsType = {
    contacts:contactDataType[]
}


const Contacts = (props:PropsType) => {

    return (
        <div className={s.contacts}>

            {props.contacts.map(contact => <Contact key={contact.id} name={contact.name} id={contact.id}/>)}

        </div>
    );
};

export default Contacts;