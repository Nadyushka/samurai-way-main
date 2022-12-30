import React from 'react';
import {
    addNewPostActionCreator,
    changeNewPostPostActionCreator,
    postsDataType
} from "../../../../redux/profile-pages-reducer";
import {AppStateType} from "../../../../redux/redux-store";
import {Dispatch} from "redux";
import {connect} from "react-redux";
import Contacts from "./Contacts";


export type contactDataType = {
    id: number
    name: string
}

export type mapStateToProps = {
    contacts:contactDataType[]
}

export type mapDispatchToPropsType = {

}

export type PostsPropsType = mapStateToProps & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType):mapStateToProps => {
    return {
        contacts: state.messagePages.contacts
    }
}


const mapDispatchToProps = (dispatch:Dispatch ):mapDispatchToPropsType => {
    return {

    }
}

const ContactsContainer = connect(mapStateToProps, mapDispatchToProps)(Contacts)

export default ContactsContainer;