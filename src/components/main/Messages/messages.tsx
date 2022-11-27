import React from 'react';
import s from "./messages.module.css"
import Contacts from "./Contacts/Contacts";
import Dialogs from "./Dialogs/Dialogs";


const Messages = () => {
    return (
        <div className={s.messages}>
            <Contacts />
            <Dialogs />
        </div>
    );
};

export default Messages;