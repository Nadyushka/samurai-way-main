import React from 'react';
import s from "./messages.module.css"
import DialogsContainer from "./Dialogs/DialogsContainer";
import ContactsContainer from "./Contacts/ContactsContainer";



const Messages = () => {

    return (
        <div className={s.messages}>
            <ContactsContainer/>
            <DialogsContainer />
        </div>
    );
};

export default Messages;