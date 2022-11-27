import React from 'react';
import s from "./message.module.css";

type MessagePropsType = {
    message: string
}

const Message = (props:MessagePropsType) => {
    return (
        <div className={s.message}>
            <div className={s.dialog}>{props.message}</div>
        </div>
    );
};

export default Message;