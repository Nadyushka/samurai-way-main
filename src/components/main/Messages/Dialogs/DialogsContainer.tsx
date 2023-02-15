import React from 'react';
import {addNewMessageActionCreator} from "../../../../redux/message-page-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../../../redux/redux-store";
import {messageDataType} from "../../../../redux/state";
import {compose, Dispatch} from "redux";
import {WithAuthRedirect} from "../../../../hoc/WithAuthRedirect";


export type mapStateToPropsType = {
    dialogs: messageDataType[]
}

export type mapDispatchToPropsType = {
    onClickButtonSendHandler: (newMessage: string) => void
}

export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        dialogs: state.messagePages.dialogs,
    }
}

const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
    return {
        onClickButtonSendHandler:
            (newMessage: string) => {
                dispatch(addNewMessageActionCreator(newMessage))
            }
    }
}


export default compose<React.ComponentType>(
    connect(mapStateToProps, mapDispatchToProps),
    WithAuthRedirect,
)(Dialogs)

