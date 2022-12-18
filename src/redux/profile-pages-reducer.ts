import {dispatchTypes, pagesTypes, postsDataType} from "./state";

const ADD_POST = 'ADD-POST'
const CHANGE_NEW_POST = 'CHANGE-NEW-POST'

export const addNewPostActionCreator = (newPost: string) => ({type: ADD_POST, post: newPost}) as const
export const changeNewPostPostActionCreator = (post: string) => ({type: CHANGE_NEW_POST, newPostValue: post}) as const

export type dispatchAddPostType = ReturnType<typeof addNewPostActionCreator>
export type dispatchChangeNewPostType = ReturnType<typeof changeNewPostPostActionCreator>

export const profilePageReducer = (state:pagesTypes,action:dispatchTypes) => {
    if (action.type === ADD_POST) {
        let newPost: postsDataType = {
            id: new Date().getSeconds(),
            post: action.post,
            likesCount: 0,
            commentsCount: 0
        }
        state.profilePages.posts.push(newPost)
        state.profilePages.newPost = ''
    } else if (action.type === CHANGE_NEW_POST) {
        state.profilePages.newPost = action.newPostValue;
    }
}

