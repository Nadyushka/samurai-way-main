import {Dispatch} from "redux";
import {profileApi, usersApi} from "../api/api";
import {addNewMessageActionCreatorType, changeNewMessageActionCreatorType} from "./message-page-reducer";


const ADD_POST = 'ADD-POST'
const CHANGE_NEW_POST = 'CHANGE-NEW-POST'
const SET_PROFILE_PAGE = 'SET_PROFILE_PAGE'
const SET_STATUS = 'SET_STATUS'

export const addNewPostActionCreator = (newPost: string) => ({type: ADD_POST, post: newPost}) as const
export const changeNewPostPostActionCreator = (post: string) => ({type: CHANGE_NEW_POST, newPostValue: post}) as const
export const setUsersProfile = (profile: ProfilePageType) => ({type: SET_PROFILE_PAGE, profile: profile}) as const
export const setStatus = (status: string) => ({type: SET_STATUS, status: status}) as const

export type dispatchAddPostType = ReturnType<typeof addNewPostActionCreator>
export type dispatchChangeNewPostType = ReturnType<typeof changeNewPostPostActionCreator>
export type setUsersProfileType = ReturnType<typeof setUsersProfile>
export type setStatusType = ReturnType<typeof setStatus>

type dispatchTypes =
    dispatchAddPostType
    | dispatchChangeNewPostType
    | addNewMessageActionCreatorType
    | changeNewMessageActionCreatorType | setUsersProfileType | setStatusType

export const getUsersProfile = (userId: string) => {
    return (dispatch: Dispatch) => {
        profileApi.getProfile(userId)
            .then(response => {
                    dispatch(setUsersProfile(response.data))
                }
            )
    }
}

export const getStatus = (status: string) => {
    return (dispatch: Dispatch) => {
        profileApi.getStatus(status)
            .then(response => {
                    dispatch(setStatus(response.data))
                }
            )
    }
}

export const updateStatus = (status: string) => {
    return (dispatch: Dispatch) => {
        profileApi.updateStatus(status)
            .then(response => {
                    if (response.data.resultCode === 0) {
                        dispatch(setStatus(response.data))
                    }

                }
            )
    }
}

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

let initialState: initialStateType = {
    posts: [
        {id: 1, post: 'Hello, everyone', likesCount: 10, commentsCount: 0},
        {id: 2, post: 'I am happy', likesCount: 13, commentsCount: 0}
    ],
    newPost: '',
    profile: null,
    status: '',
}

type initialStateType = {
    posts: postsDataType[]
    newPost: string,
    profile: ProfilePageType | null
    status: string
}


export const profilePageReducer = (state: initialStateType = initialState, action: dispatchTypes): initialStateType => {
    if (action.type === ADD_POST) {
        let newPost: postsDataType = {
            id: new Date().getSeconds(),
            post: action.post,
            likesCount: 0,
            commentsCount: 0
        }
        return {...state, posts: [...state.posts, newPost], newPost: ""}

    } else if (action.type === CHANGE_NEW_POST) {
        return {...state, newPost: action.newPostValue}
    } else if (action.type === SET_PROFILE_PAGE) {
        return {...state, profile: action.profile}
    } else if (action.type === SET_STATUS) {
        return {...state, status: action.status}
    }

    return state;
}

