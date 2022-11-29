import React from 'react';
import s from './dialogs.module.css'
import Message from "./Messege/Message";
import {allStateTypes, messageDataType} from "../../../../redux/state";

type PropsType = {
    dialogs: messageDataType[]
}

const Dialogs = (props:PropsType) => {

    return (
        <div className={s.dialogs}>
            {props.dialogs.map((message) => <Message id={message.id} message={message.message}/>)}
        </div>
    );
};

export default Dialogs;