import React from 'react';
import s from "./messages.module.css"
import Contacts from "./Contacts/Contacts";
import Dialogs from "./Dialogs/Dialogs";
import {dispatchTypes, messagePagesType} from "../../../redux/state";

type PropsType = {
    messagePages: messagePagesType
    dispatch: (action: dispatchTypes)=> void
}

const Messages = (props: PropsType) => {
    return (
        <div className={s.messages}>
            <Contacts contacts={props.messagePages.contacts}/>
            <Dialogs dialogs={props.messagePages.dialogs}
                     newMessageText={props.messagePages.newMessageText}
                     dispatch = {props.dispatch}
            />
        </div>
    );
};

export default Messages;