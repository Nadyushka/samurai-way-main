import React from 'react';
import s from "./messages.module.css"
import Contacts from "./Contacts/Contacts";
import Dialogs from "./Dialogs/Dialogs";
import {contactDataType, messageDataType} from "../../../index";

type MessagesPropsType = {
    contactData: contactDataType[]
    messageData: messageDataType[]
}

const Messages = (props: MessagesPropsType) => {
    return (
        <div className={s.messages}>
            <Contacts contactData={props.contactData}/>
            <Dialogs messageData={props.messageData}/>
        </div>
    );
};

export default Messages;