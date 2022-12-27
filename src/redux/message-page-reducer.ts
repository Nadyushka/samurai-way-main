import {dispatchTypes, messageDataType, messagePagesType, pagesTypes} from "./state";

const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE'
const CHANGE_NEW_MESSAGE = 'CHANGE_NEW_MESSAGE'


export const addNewMessageActionCreator = (newMessage: string) => ({
    type: ADD_NEW_MESSAGE,
    newMessageText: newMessage
}) as const
export const changeNewMessageActionCreator = (newMessageText: string) => ({
    type: CHANGE_NEW_MESSAGE,
    newMessageText: newMessageText
}) as const

export type changeNewMessageActionCreatorType = ReturnType<typeof changeNewMessageActionCreator>
export type addNewMessageActionCreatorType = ReturnType<typeof addNewMessageActionCreator>

let initialState: messagePagesType = {
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

export const messagePageReducer = (state:messagePagesType = initialState,action:dispatchTypes) => {
    if (action.type === ADD_NEW_MESSAGE) {
        let newMessage: messageDataType = {
            id: new Date().getSeconds(),
            message: action.newMessageText,
        }
        state.dialogs.push(newMessage)
        state.newMessageText = ''
    } else if (action.type === CHANGE_NEW_MESSAGE) {
        state.newMessageText = action.newMessageText
    }
}

