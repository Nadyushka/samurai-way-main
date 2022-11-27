import React from 'react';
import s from './dialogs.module.css'
import Message from "./Messege/Message";
import {state} from "../../../../redux/state";


const Dialogs = () => {

    return (
        <div className={s.dialogs}>
            {state.messagePages.dialogs.map((message) => <Message id={message.id} message={message.message}/>)}
        </div>
    );
};

export default Dialogs;