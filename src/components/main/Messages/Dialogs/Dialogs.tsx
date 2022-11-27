import React from 'react';
import s from './dialogs.module.css'
import Message from "./Messege/Message";
import {messageDataType} from "../../../../index";

type DialogsPropsType = {
    messageData: messageDataType[]
}

const Dialogs = (props:DialogsPropsType) => {

    return (
        <div className={s.dialogs}>
            {props.messageData.map((message) => <Message id={message.id} message={message.message}/>)}
        </div>
    );
};

export default Dialogs;