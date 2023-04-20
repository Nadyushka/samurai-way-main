import React from 'react';
import {addNewMessageActionCreator, messageDataType} from "../../../../../../s2-BLL/message-page-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {AppStateType} from "../../../../../../s2-BLL/redux-store";
import {compose, Dispatch} from "redux";
import {WithAuthRedirect} from "../../../../../hoc/WithAuthRedirect";


type PropsType = {
    myMessage: boolean
}

export type mapStateToPropsType = {
    dialogs: messageDataType[]
    myMessages: boolean
    userPhoto: string | null | undefined
}

export type mapDispatchToPropsType = {
    addNewMessageActionCreator: (newMessage: string, value: number) => void
}

export type DialogsPropsType = mapStateToPropsType & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType, myMessages: PropsType): mapStateToPropsType => {
    return {
        dialogs: state.messagePages.dialogs,
        myMessages: myMessages.myMessage,
        userPhoto: state.profilePages.profile?.photos.small
    }
}


export const DialogsContainer = compose<React.ComponentType<PropsType>>(
    connect(mapStateToProps, {addNewMessageActionCreator}),
    WithAuthRedirect,
)(Dialogs)

