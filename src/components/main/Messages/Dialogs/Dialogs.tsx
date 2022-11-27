import React from 'react';
import s from './dialogs.module.css'
import Message from "./Messege/Message";

const Dialogs = () => {

    type messageDataType = {
        id:number
        message:string
    }

    let messageData:messageDataType[] = [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 1, message: 'Enjoy your day'}]

    return (
        <div className={s.dialogs}>
            {messageData.map((message) => <Message id={message.id} message={message.message}/>)}
        </div>
    );
};

export default Dialogs;