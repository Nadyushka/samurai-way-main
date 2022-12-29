import {dispatchTypes} from "./state";


const ADD_POST = 'ADD-POST'
const CHANGE_NEW_POST = 'CHANGE-NEW-POST'

export const addNewPostActionCreator = (newPost: string) => ({type: ADD_POST, post: newPost}) as const
export const changeNewPostPostActionCreator = (post: string) => ({type: CHANGE_NEW_POST, newPostValue: post}) as const

export type dispatchAddPostType = ReturnType<typeof addNewPostActionCreator>
export type dispatchChangeNewPostType = ReturnType<typeof changeNewPostPostActionCreator>


export type postsDataType = {
    id: number
    post: string
    likesCount: number
    commentsCount: number
}

let initialState = {
    posts: [
        {id: 1, post: 'Hello, everyone', likesCount: 10, commentsCount: 0},
        {id: 2, post: 'I am happy', likesCount: 13, commentsCount: 0}
    ] as postsDataType[],
    newPost: '',
}

type initialStateType = typeof initialState

export const profilePageReducer = (state:initialStateType = initialState,action:dispatchTypes):initialStateType => {
    if (action.type === ADD_POST) {
        let newPost: postsDataType = {
            id: new Date().getSeconds(),
            post: action.post,
            likesCount: 0,
            commentsCount: 0
        }
       // state.posts.push(newPost)
       // state.newPost = ''
        return {...state, posts: [...state.posts, newPost], newPost:""}

    } else if (action.type === CHANGE_NEW_POST) {
        // state.newPost = action.newPostValue
        return {...state, newPost: action.newPostValue}
    }

    return state;
}

