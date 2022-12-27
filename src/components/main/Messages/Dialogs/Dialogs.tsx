import React, {ChangeEvent} from 'react';
import s from './dialogs.module.css'
import Message from "./Message/Message";
import {dispatchTypes, messageDataType} from "../../../../redux/state";
import {addNewMessageActionCreator, changeNewMessageActionCreator} from "../../../../redux/message-page-reducer";


type PropsType = {
    onClickButtonSendHandler: ()=> void
    onChangeInputHandler: (text:string)=> void
    dialogs: messageDataType[]
    newMessageText:string
}

const Dialogs = (props: PropsType) => {

    const onClickButtonSendHandler = () => {
        props.onClickButtonSendHandler()
    }

    const onChangeInputHandler = (e: ChangeEvent<HTMLInputElement>) => {
        let text = e.currentTarget.value
        props.onChangeInputHandler(text)
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