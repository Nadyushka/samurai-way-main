import {
    dispatchAddPostType,
    dispatchChangeNewPostType,
    profilePageReducer, setUsersProfileType
} from "./profile-pages-reducer";

import {
    addNewMessageActionCreatorType,
    changeNewMessageActionCreatorType,
    messagePageReducer
} from "./message-page-reducer";

export type contactDataType = {
    id: number
    name: string
}

export type messageDataType = {
    id: number
    message: string
}

export type postsDataType = {
    id: number
    post: string
    likesCount: number
    commentsCount: number
}

export type profilePagesType = {
    posts: postsDataType[]
    newPost: string
}

export type messagePagesType = {
    contacts: contactDataType[]
    dialogs: messageDataType[]
    newMessageText: string
}

export type pagesTypes = {
    profilePages: profilePagesType
    messagePages: messagePagesType
}

export type allStateTypes = {
    stateAll: pagesTypes;
}

export type storeType = {
    _state: allStateTypes
    _getState: () => allStateTypes
    _onChange: () => void
    subscriber: (callback: () => void) => void
    dispatch: (action: dispatchTypes) => void
}

export type dispatchTypes =
    dispatchAddPostType
    | dispatchChangeNewPostType
    | addNewMessageActionCreatorType
    | changeNewMessageActionCreatorType | setUsersProfileType

export const store: storeType = {
    _state: {
        stateAll: {
            profilePages: {
                posts: [{id: 1, post: 'Hello, everyone', likesCount: 10, commentsCount: 0},
                    {id: 2, post: 'I am happy', likesCount: 13, commentsCount: 0}],
                newPost: '',
            },
            messagePages: {
                contacts: [
                    {id: 1, name: 'Bison'},
                    {id: 2, name: 'John'},
                    {id: 3, name: 'Alexa'},
                    {id: 4, name: 'Peter'},
                    {id: 5, name: 'Sandra'}]
                ,
                dialogs: [
                    {id: 1, message: 'Hi'},
                    {id: 2, message: 'How are you?'},
                    {id: 3, message: 'Enjoy your day'}
                ],
                newMessageText: '',
            }
        }
    },
    _getState() {
        return this._state
    },
    _onChange() {
        console.log('change state')
    },
    subscriber(callback) {
        this._onChange = callback
    },
    dispatch(action) {
       // profilePageReducer(store._state.stateAll.profilePages, action)
        messagePageReducer(store._state.stateAll.messagePages, action)
        this._onChange()
    }
}

