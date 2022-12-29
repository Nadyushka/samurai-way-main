import React from 'react';
import s from "./messages.module.css"
import Contacts from "./Contacts/Contacts";
import DialogsContainer from "./Dialogs/DialogsContainer";



const Messages = () => {
    return (
        <div className={s.messages}>
            <Contacts/>
            <DialogsContainer />
        </div>
    );
};

export default Messages;