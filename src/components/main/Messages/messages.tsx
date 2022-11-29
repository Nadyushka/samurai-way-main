import React from 'react';
import s from "./messages.module.css"
import Contacts from "./Contacts/Contacts";
import Dialogs from "./Dialogs/Dialogs";
import {allStateTypes, messagePagesType} from "../../../redux/state";

type PropsType = {
    messagePages: messagePagesType
}

const Messages = (props:PropsType) => {
    return (
        <div className={s.messages}>
            <Contacts contacts={props.messagePages.contacts}/>
            <Dialogs dialogs={props.messagePages.dialogs}/>
        </div>
    );
};

export default Messages;