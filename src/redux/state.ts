
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
}

export type pagesTypes = {
    profilePages: profilePagesType
    messagePages: messagePagesType
}


export type allStateTypes = {
    stateAll: pagesTypes;
}


export const addPost = (post: string) => {
    let newPost: postsDataType = {
        id: new Date().getSeconds(),
        post: post,
        likesCount: 0,
        commentsCount: 0
    }
    state.stateAll.profilePages.posts.push(newPost)
    onChange()
    state.stateAll.profilePages.newPost = ''
}

export const changeNewPost = (newPostValue: string) => {
    state.stateAll.profilePages.newPost = newPostValue;
    onChange()
}

type storeType = {
    _state: allStateTypes
    _getState:()=>void
    _onChange: ()=>void
    subscriber: (callback: () => void)=>void
}

let store:storeType = {
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
                ]
            }
        }
    },
    _getState() {
        this._state
    },
    _onChange(){
    },
    subscriber(callback){
        this._onChange = callback
    }
}

export default store