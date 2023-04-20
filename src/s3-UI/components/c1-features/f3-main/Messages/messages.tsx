import React from 'react';
import s from "./messages.module.css"
import {DialogsContainer} from "./Dialogs/DialogsContainer";
import ContactsContainer from "./Contacts/ContactsContainer";


const Messages = () => {


    return (
        <div className={s.messages}>
            {/*<ContactsContainer/>*/}
            <DialogsContainer myMessage={true}/>
            <DialogsContainer myMessage={false}/>
        </div>
    );
};

export default Messages;