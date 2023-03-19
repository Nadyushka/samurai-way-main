import {Dispatch} from "redux";
import {profileApi, usersApi} from "../s1-DAL/api";
import {addNewMessageActionCreatorType} from "./message-page-reducer";


let initialState: initialStateType = {
    posts: [
        {id: 1, post: 'Hello, everyone', likesCount: 10, commentsCount: 0},
        {id: 2, post: 'I am happy', likesCount: 13, commentsCount: 0}
    ],
    profile: null,
    status: '',
}

export const profilePageReducer = (state: initialStateType = initialState, action: dispatchTypes): initialStateType => {
    switch (action.type) {
        case ADD_POST: {
            let newPost: postsDataType = {
                id: new Date().getSeconds(),
                post: action.post,
                likesCount: 0,
                commentsCount: 0
            }
            return {...state, posts: [...state.posts, newPost]}
        }
        case SET_PROFILE_PAGE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {...state, status: action.status}
        case DELETE_POST:
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
        default:
            return state;
    }
}

// const

const ADD_POST = 'samurai-wai/profile/ADD-POST'
const DELETE_POST = 'samurai-wai/profile/DELETE_POST'
const SET_PROFILE_PAGE = 'samurai-wai/profile/SET_PROFILE_PAGE'
const SET_STATUS = 'samurai-wai/profile/SET_STATUS'

// action creators

export const addNewPostActionCreator = (newPost: string) => ({type: ADD_POST, post: newPost}) as const
export const postDeleteActionCreator = (postId: number) => ({type: DELETE_POST, postId: postId}) as const
export const setUsersProfile = (profile: ProfilePageType) => ({type: SET_PROFILE_PAGE, profile: profile}) as const
export const setStatus = (status: string) => ({type: SET_STATUS, status: status}) as const

// thunk creators

export const getUsersProfile = (userId: string) => async (dispatch: Dispatch) => {
    let response = await profileApi.getProfile(userId)
    dispatch(setUsersProfile(response.data))
}

export const getStatus = (userId: string) => async (dispatch: Dispatch) => {
    let response = await profileApi.getStatus(userId)
    dispatch(setStatus(response.data))
}

export const updateStatus = (status: string) => async (dispatch: Dispatch) => {
    let response = await profileApi.updateStatus(status)
    if (response.data.resultCode === 0) {
        dispatch(setStatus(status))
    }
}

// types

export type dispatchAddPostType = ReturnType<typeof addNewPostActionCreator>
export type deletePostType = ReturnType<typeof postDeleteActionCreator>
export type setUsersProfileType = ReturnType<typeof setUsersProfile>
export type setStatusType = ReturnType<typeof setStatus>

type dispatchTypes =
    dispatchAddPostType
    | addNewMessageActionCreatorType
    | setUsersProfileType | setStatusType | deletePostType


export type postsDataType = {
    id: number
    post: string
    likesCount: number
    commentsCount: number
}

export type ProfilePageType = {
    aboutMe: string,
    contacts: {
        facebook: string | null
        website: string | null
        vk: string | null
        twitter: string | null
        instagram: string | null
        youtube: string | null
        github: string | null
        mainLink: string | null
    },
    lookingForAJob: boolean,
    lookingForAJobDescription: string,
    fullName: string,
    userId: number,
    photos: {
        small: string | null
        large: string | null
    }
}

type initialStateType = {
    posts: postsDataType[]
    profile: ProfilePageType | null
    status: string
}