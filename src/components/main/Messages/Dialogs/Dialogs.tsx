import React from 'react';
import s from './dialogs.module.css'
import Message from "./Messege/Message";

const Dialogs = () => {
    return (
        <div className={s.dialogs}>
            <Message message={'Hi'} />
            <Message message={'How are you?'} />
            <Message message={'Enjoy your day'} />

        </div>
    );
};

export default Dialogs;