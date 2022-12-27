import React, {ChangeEvent} from 'react';
import s from './dialogs.module.css'
import Message from "./Message/Message";
import {dispatchTypes, messageDataType} from "../../../../redux/state";
import {addNewMessageActionCreator, changeNewMessageActionCreator} from "../../../../redux/message-page-reducer";
import Dialogs from "./Dialogs";


type PropsType = {
    dialogs: messageDataType[]
    newMessageText: string
    dispatch: (action: dispatchTypes) => void
}

const DialogsContainer = (props: PropsType) => {

    const onClickButtonSendHandler = () => {
        props.dispatch(addNewMessageActionCreator(props.newMessageText))
    }

    const onChangeInputHandler = (text:string) => {
        props.dispatch(changeNewMessageActionCreator(text))
    }

    return (
       <Dialogs
           onClickButtonSendHandler={onClickButtonSendHandler}
           onChangeInputHandler={onChangeInputHandler}
           dialogs={props.dialogs}
           newMessageText={props.newMessageText}
       />
    );
};

export default DialogsContainer;