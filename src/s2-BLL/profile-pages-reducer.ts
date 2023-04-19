import {Dispatch} from "redux";
import {profileApi, profileType, usersApi} from "../s1-DAL/api";
import {addNewMessageActionCreatorType} from "./message-page-reducer";
import {AppStateType} from "./redux-store";


let initialState: initialStateType = {
    posts: [],
    profile: null,
    status: '',
}

export const profilePageReducer = (state: initialStateType = initialState, action: dispatchTypes): initialStateType => {
    switch (action.type) {
        case ADD_POST: {
            return {...state, posts: action.posts.map(p => ({...p}))}
        }
        case ADD_NEW_COMMENT: {
            return {...state, posts: action.posts.map(p => ({...p}))}
        }
        case DELETE_COMMENT: {
            return {
                ...state,
                posts: state.posts.map(p => p.id === action.postId ? {
                    ...p,
                    comments: p.comments.filter(c => c.commentId !== action.commentId),
                    commentsCount: p.commentsCount - 1
                } : {...p})
            }
        }
        case TOGGLE_LIKE_POST: {
            return {...state, posts: action.posts.map(p => ({...p}))}
        }
        case SET_PROFILE_PAGE:
            return {...state, profile: action.profile}
        case SET_STATUS:
            return {...state, status: action.status}
        case DELETE_POST:
            return {...state, posts: state.posts.filter(p => p.id !== action.postId)}
        case SET_NEW_PROFILE_PHOTO:
            return {...state, profile: {...state.profile!, photos: action.photos}}
        case SET_POSTS_lOCAL_STORAGE:
            return {...state, posts: action.postsLocalStorage.map(p => ({...p}))}
        default:
            return state;
    }
}

// const

const ADD_POST = 'samurai-wai/profile/ADD-POST'
const DELETE_POST = 'samurai-wai/profile/DELETE_POST'
const SET_PROFILE_PAGE = 'samurai-wai/profile/SET_PROFILE_PAGE'
const SET_STATUS = 'samurai-wai/profile/SET_STATUS'
const SET_NEW_PROFILE_PHOTO = 'samurai-wai/profile/SET_NEW_PROFILE_PHOTO'
const SET_POSTS_lOCAL_STORAGE = 'samurai-wai/profile/SET_POSTS-LOCAL-STORAGE'
const TOGGLE_LIKE_POST = 'samurai-wai/profile/TOGGLE_LIKE_POST'
const ADD_NEW_COMMENT = 'samurai-wai/profile/ADD_NEW_COMMENT'
const DELETE_COMMENT = 'samurai-wai/profile/DELETE_COMMENT'

// action creators

export const addNewPostActionCreator = (posts: postsDataType[]) => ({type: ADD_POST, posts}) as const
export const postDeleteActionCreator = (postId: number) => ({type: DELETE_POST, postId: postId}) as const
export const setUsersProfile = (profile: ProfilePageType) => ({type: SET_PROFILE_PAGE, profile: profile}) as const
export const setStatus = (status: string) => ({type: SET_STATUS, status: status}) as const
export const setNewProfilePhoto = (photos: { small: string | null, large: string | null }) => ({
    type: SET_NEW_PROFILE_PHOTO,
    photos
}) as const
export const getPosts = (postsLocalStorage: postsDataType[]) => ({
    type: SET_POSTS_lOCAL_STORAGE,
    postsLocalStorage
}) as const
export const toggleLikePostActionCreator = (posts: postsDataType[]) => ({type: TOGGLE_LIKE_POST, posts}) as const
export const addNewCommentActionCreator = (posts: postsDataType[]) => ({type: ADD_NEW_COMMENT, posts}) as const
export const commentDeleteActionCreator = (postId: number, commentId: number) => ({
    type: DELETE_COMMENT,
    postId,
    commentId
}) as const

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

export const onChangePhoto = (photo: File) => async (dispatch: Dispatch) => {
    let response = await profileApi.changePhoto(photo)
    if (response.data.resultCode === 0) {
        console.log(response.data.data.photos)
        dispatch(setNewProfilePhoto(response.data.data.photos))
    }
}

export const saveProfile = (profile: profileType) => async (dispatch: Dispatch) => {
    let response = await profileApi.saveProfile(profile)
    if (response.data.resultCode === 0) {
        let responseInfo = await profileApi.getProfile('27362')
        dispatch(setUsersProfile(responseInfo.data))
    }
}

export const addPostTC = (post: string) => async (dispatch: Dispatch, getState: () => AppStateType) => {
    const newPost: postsDataType = {
        id: new Date().getSeconds(),
        post: post,
        likesCount: 0,
        commentsCount: 0,
        myLike: false,
        comments: []
    }
    const posts = getState().profilePages.posts
    const newPosts = [newPost, ...posts.map(p => ({...p}))]
    localStorage.removeItem('postsLocalStorage')
    localStorage.setItem('postsLocalStorage', JSON.stringify(newPosts))
    dispatch(addNewPostActionCreator(newPosts))
}

export const deletePostTC = (postId: number) => async (dispatch: Dispatch, getState: () => AppStateType) => {
    let updatedPosts = getState().profilePages.posts.filter(p => p.id !== postId)
    localStorage.removeItem('postsLocalStorage')
    localStorage.setItem('postsLocalStorage', JSON.stringify(updatedPosts))
    dispatch(postDeleteActionCreator(postId))
}

export const likeMyPostTC = (postId: number, likeMyPostValue: boolean) => async (dispatch: Dispatch, getState: () => AppStateType) => {
    let updatedPosts = getState().profilePages.posts.map(p => p.id === postId ? {
        ...p,
        myLike: likeMyPostValue,
        likesCount: p.likesCount + (likeMyPostValue ? 1 : -1)
    } : {...p})
    localStorage.removeItem('postsLocalStorage')
    localStorage.setItem('postsLocalStorage', JSON.stringify(updatedPosts))
    console.log(updatedPosts)
    dispatch(toggleLikePostActionCreator(updatedPosts))
}

export const addNewPostTC = (comment: string, postId: number, userName: string) => async (dispatch: Dispatch, getState: () => AppStateType) => {
    const newComment: { userName: string, comment: string, commentId: number } = {
        userName,
        comment,
        commentId: +new Date().getTime()
    }
    const posts = getState().profilePages.posts
    const newPosts = [...posts.map(p => p.id === postId ? {
        ...p,
        commentsCount: p.commentsCount + 1,
        comments: [newComment, ...p.comments]
    } : ({...p}))]
    localStorage.removeItem('postsLocalStorage')
    localStorage.setItem('postsLocalStorage', JSON.stringify(newPosts))
    dispatch(addNewCommentActionCreator(newPosts))
}

export const deleteCommentTC = (postId: number, commentId: number) => async (dispatch: Dispatch, getState: () => AppStateType) => {
    let updatedPosts = getState().profilePages.posts.map(p => p.id === postId ? {
        ...p,
        comments: p.comments.filter(c => c.commentId !== commentId),
        commentsCount: p.commentsCount - 1
    } : {...p})
    localStorage.removeItem('postsLocalStorage')
    localStorage.setItem('postsLocalStorage', JSON.stringify(updatedPosts))
    dispatch(commentDeleteActionCreator(postId, commentId))
}

// types

export type dispatchAddPostType = ReturnType<typeof addNewPostActionCreator>
export type deletePostType = ReturnType<typeof postDeleteActionCreator>
export type setUsersProfileType = ReturnType<typeof setUsersProfile>
export type setStatusType = ReturnType<typeof setStatus>
export type setNewProfilePhotoType = ReturnType<typeof setNewProfilePhoto>
export type setPostsLocalStorageType = ReturnType<typeof getPosts>
export type toggleLikePostType = ReturnType<typeof toggleLikePostActionCreator>
export type addNewCommentType = ReturnType<typeof addNewCommentActionCreator>
export type commentDeleteType = ReturnType<typeof commentDeleteActionCreator>

type dispatchTypes =
    dispatchAddPostType
    | addNewMessageActionCreatorType
    | setUsersProfileType | setStatusType | deletePostType
    | setNewProfilePhotoType | setPostsLocalStorageType | toggleLikePostType | addNewCommentType | commentDeleteType


export type postsDataType = {
    id: number
    post: string
    likesCount: number
    commentsCount: number
    myLike: boolean,
    comments: Array<{ userName: string, comment: string, commentId: number }> | []
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