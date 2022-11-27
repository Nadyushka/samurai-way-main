import React from 'react';
import s from './dialogs.module.css'
import Message from "./Messege/Message";

const Dialogs = () => {


    return (
        <div className={s.dialogs}>
            {messageData.map((message) => <Message id={message.id} message={message.message}/>)}
        </div>
    );
};

export default Dialogs;