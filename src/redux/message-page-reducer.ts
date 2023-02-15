import {dispatchTypes} from "./state";

const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE'

export const addNewMessageActionCreator = (newMessage: string) => ({
    type: ADD_NEW_MESSAGE,
    newMessageText: newMessage
}) as const


export type addNewMessageActionCreatorType = ReturnType<typeof addNewMessageActionCreator>

export type contactDataType = {
    id: number
    name: string
}

export type messageDataType = {
    id: number
    message: string
}

let initialState = {
    contacts: [
        {id: 1, name: 'Bison'},
        {id: 2, name: 'John'},
        {id: 3, name: 'Alexa'},
        {id: 4, name: 'Peter'},
        {id: 5, name: 'Sandra'}] as contactDataType[]
    ,
    dialogs: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'How are you?'},
        {id: 3, message: 'Enjoy your day'}
    ] as messageDataType[],
}

type initialStateType = typeof initialState

export const messagePageReducer = (state: initialStateType = initialState, action: dispatchTypes): initialStateType => {
    if (action.type === ADD_NEW_MESSAGE) {
        let newMessage: messageDataType = {
            id: new Date().getSeconds(),
            message: action.newMessageText,
        }
        let newState = {...state, dialogs: [...state.dialogs,newMessage]}
        return newState

    }
    return state;

}

