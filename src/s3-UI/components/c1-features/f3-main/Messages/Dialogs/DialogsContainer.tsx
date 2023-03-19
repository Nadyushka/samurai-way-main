import React from 'react';
import {addNewMessageActionCreator} from "../../../../../../s2-BLL/message-page-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../../../../../s2-BLL/redux-store";
import {messageDataType} from "../../../../../../s2-BLL/state";
import {compose, Dispatch} from "redux";
import {WithAuthRedirect} from "../../../../../hoc/WithAuthRedirect";


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

