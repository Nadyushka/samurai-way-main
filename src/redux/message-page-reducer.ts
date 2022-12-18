import {dispatchTypes, messageDataType, pagesTypes} from "./state";

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

export const messagePageReducer = (state:pagesTypes,action:dispatchTypes) => {
    if (action.type === ADD_NEW_MESSAGE) {
        let newMessage: messageDataType = {
            id: new Date().getSeconds(),
            message: action.newMessageText,
        }
        state.messagePages.dialogs.push(newMessage)
        state.messagePages.newMessageText = ''
    } else if (action.type === CHANGE_NEW_MESSAGE) {
        state.messagePages.newMessageText = action.newMessageText
    }
}

