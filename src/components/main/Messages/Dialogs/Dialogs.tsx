import React, {ChangeEvent} from 'react';
import s from './dialogs.module.css'
import Message from "./Messege/Message";
import {   dispatchTypes, messageDataType} from "../../../../redux/state";
import {addNewMessageActionCreator, changeNewMessageActionCreator} from "../../../../redux/message-page-reducer";

type PropsType = {
    dialogs: messageDataType[]
    newMessageText: string
    dispatch: (action: dispatchTypes) => void
}

const Dialogs = (props: PropsType) => {

    const onClickButtonSendHandler = () => {
        props.dispatch(addNewMessageActionCreator(props.newMessageText))
    }

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.dispatch(changeNewMessageActionCreator(e.currentTarget.value))
    }

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsBody}>
                {props.dialogs.map((message) => <Message key={message.id} id={message.id} message={message.message}/>)}
            </div>
            <div className={s.dialogsInput}>
                <input placeholder={'write your message'} value={props.newMessageText} onChange={onChangeInputHandler}/>
                <button onClick={onClickButtonSendHandler}>Send message</button>
            </div>
        </div>
    );
};

export default Dialogs;