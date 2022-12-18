const ADD_POST = 'ADD-POST'
const CHANGE_NEW_POST = 'CHANGE-NEW-POST'
const ADD_NEW_MESSAGE = 'ADD_NEW_MESSAGE'
const CHANGE_NEW_MESSAGE = 'CHANGE_NEW_MESSAGE'

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
    addPost: (post: string) => void
    changeNewPost: (newPostValue: string) => void
    dispatch: (action: dispatchTypes) => void
}


type dispatchAddPostType = ReturnType<typeof addNewPostActionCreator>
type dispatchChangeNewPostType = ReturnType<typeof changeNewPostPostActionCreator>
type changeNewMessageActionCreatorType = ReturnType<typeof changeNewMessageActionCreator>
type addNewMessageActionCreatorType = ReturnType<typeof addNewMessageActionCreator>

export type dispatchTypes =
    dispatchAddPostType
    | dispatchChangeNewPostType
    | addNewMessageActionCreatorType
    | changeNewMessageActionCreatorType

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
    addPost(post) {
        let newPost: postsDataType = {
            id: new Date().getSeconds(),
            post: post,
            likesCount: 0,
            commentsCount: 0
        }
        this._state.stateAll.profilePages.posts.push(newPost)
        this._onChange()
        this._state.stateAll.profilePages.newPost = ''
    },
    changeNewPost(newPostValue) {
        this._state.stateAll.profilePages.newPost = newPostValue;
        this._onChange()
    },
    dispatch(action) {
        if (action.type === ADD_POST) {
            let newPost: postsDataType = {
                id: new Date().getSeconds(),
                post: action.post,
                likesCount: 0,
                commentsCount: 0
            }
            this._state.stateAll.profilePages.posts.push(newPost)
            this._onChange()
            this._state.stateAll.profilePages.newPost = ''
        } else if (action.type === CHANGE_NEW_POST) {
            this._state.stateAll.profilePages.newPost = action.newPostValue;
            this._onChange()
        } else if (action.type === ADD_NEW_MESSAGE) {
            let newMessage: messageDataType = {
                id: new Date().getSeconds(),
                message: action.newMessageText,
            }
            this._state.stateAll.messagePages.dialogs.push(newMessage)
            this._onChange()
            this._state.stateAll.messagePages.newMessageText = ''
        } else if (action.type === CHANGE_NEW_MESSAGE) {
            this._state.stateAll.messagePages.newMessageText = action.newMessageText
            this._onChange()
        }
    }

}


export const addNewPostActionCreator = (newPost: string) => ({type: ADD_POST, post: newPost}) as const
export const changeNewPostPostActionCreator = (post: string) => ({type: CHANGE_NEW_POST, newPostValue: post}) as const

export const addNewMessageActionCreator = (newMessage: string) => ({
    type: ADD_NEW_MESSAGE,
    newMessageText: newMessage
}) as const
export const changeNewMessageActionCreator = (newMessageText: string) => ({
    type: CHANGE_NEW_MESSAGE,
    newMessageText: newMessageText
}) as const