import React from 'react';

import {addNewMessageActionCreator, changeNewMessageActionCreator} from "../../../../redux/message-page-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../../../redux/redux-store";
import {contactDataType, messageDataType} from "../../../../redux/state";


//
// const DialogsContainer1 = () => {
//
//     const onClickButtonSendHandler = () => {
//         props.dispatch(addNewMessageActionCreator(props.newMessageText))
//     }
//
//     const onChangeInputHandler = (text:string) => {
//         props.dispatch(changeNewMessageActionCreator(text))
//     }
//
//     return (
//        <Dialogs
//            onClickButtonSendHandler={onClickButtonSendHandler}
//            onChangeInputHandler={onChangeInputHandler}
//            dialogs={props.dialogs}
//            newMessageText={props.newMessageText}
//        />
//     );
// };


export type mapStateToPropsType = {
    dialogs: messageDataType[]
    newMessageText: string
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogs: state.messagePages.dialogs,
        newMessageText: state.messagePages.newMessageText
    }
}

const mapDispatchToProps = (dispatch: any) => {
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