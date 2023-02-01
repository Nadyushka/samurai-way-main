import React from 'react';

import {addNewMessageActionCreator, changeNewMessageActionCreator} from "../../../../redux/message-page-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../../../redux/redux-store";
import { messageDataType} from "../../../../redux/state";
import {Dispatch} from "redux";



export type mapStateToPropsType = {
    dialogs: messageDataType[]
    newMessageText: string
    isAuth: boolean
}

export type mapDispatchToPropsType = {
    onClickButtonSendHandler: (newMessage: string)=>void
    onChangeInputHandler: (newMessageText: string)=>void
}

export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogs: state.messagePages.dialogs,
        newMessageText: state.messagePages.newMessageText,
        isAuth: state.auth.isAuth
    }
}

const mapDispatchToProps = (dispatch: Dispatch):mapDispatchToPropsType => {
    return {
        onClickButtonSendHandler:
            (newMessage: string) => {
                dispatch(addNewMessageActionCreator(newMessage))
            },
        onChangeInputHandler: (text: string) => {
            dispatch(changeNewMessageActionCreator(text))
        }
    }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;