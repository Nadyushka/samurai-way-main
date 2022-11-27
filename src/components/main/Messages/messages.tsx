import React from 'react';
import s from "./messages.module.css"
import Contacts from "./Contacts/Contacts";
import Dialogs from "./Dialogs/Dialogs";
import {contactDataType} from "../../../index";

type MessagesPropsType = {
    contactData: contactDataType[]
}

const Messages = (props:MessagesPropsType) => {
    return (
        <div className={s.messages}>
            <Contacts contactData={props.contactData}/>
            <Dialogs />
        </div>
    );
};

export default Messages;