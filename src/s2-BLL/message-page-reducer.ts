const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE'

export const addNewMessageActionCreator = (newMessage: string, userId: number) => ({
    type: ADD_NEW_MESSAGE,
    newMessage,
    userId
}) as const


export type addNewMessageActionCreatorType = ReturnType<typeof addNewMessageActionCreator>

export type contactDataType = {
    id: number
    name: string
}

export type messageDataType = {
    id: number
    message: { messageText: string, userId: number }
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
        {id: 1, message: {messageText: 'Hi', userId: 1}},
        {id: 2, message: {messageText: 'Hi.How are you?)', userId: 2}},
        {id: 3, message: {messageText: 'I am good. Thank you. What about you?', userId: 1}},
        {id: 4, message: {messageText: 'So-so la-la. Did you plan anything on Sunday?', userId: 2}},
        {id: 5, message: {messageText: 'Noy yet. Anything interesting?', userId: 1}},
        {id: 6, message: {messageText: 'It would be great to go somewhere', userId: 1}},
    ] as messageDataType[],
}

type initialStateType = typeof initialState

export const messagePageReducer = (state: initialStateType = initialState, action: addNewMessageActionCreatorType): initialStateType => {
    if (action.type === ADD_NEW_MESSAGE) {
        let newMessage: messageDataType = {
            id: new Date().getTime(),
            message: {
                messageText: action.newMessage,
                userId: action.userId
            },
        }
        let newState = {...state, dialogs: [...state.dialogs, newMessage]}

        return newState

    }
    return state;

}

