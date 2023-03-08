import {Dispatch} from "redux";
import {usersApi} from "../api/api";
import {updateObjectInArray} from "../utils/object-helpers";

let initialState: stateType = {
    users: [],
    pageSize: 5,
    totalUsersCont: 0,
    currentPage: 1,
    isFetching: true,
    folowingInProgress: [],
}

export const UserPageReducer = (state: stateType = initialState, action: UsersACTypes): stateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, 'id', action.id, {followed: true})
                //     state.users.map(u => {
                //     if (u.id === action.id) {
                //         return {...u, followed: true}
                //     } else {
                //         return u
                //     }
                // })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: updateObjectInArray(state.users, 'id', action.id, {followed: false})
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.newUsers, ...state.users]
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.newCurrentPage
            }
        case SET_TOTAL_USERS:
            return {
                ...state,
                totalUsersCont: action.totalUsersCount
            }
        case TOGGLE_IS_FETCHING:
            return {
                ...state,
                isFetching: action.isFetching
            }
        case TOGGLE_FOLLOWING_IN_PROGRESS:
            return {
                ...state,
                folowingInProgress:
                    action.isFetching ?
                        [...state.folowingInProgress, action.id] :
                        state.folowingInProgress.filter(id => id !== action.id)
            }
        default:
            return state
    }

}


// const

const FOLLOW = 'samurai-way/users/FOLLOW'
const UNFOLLOW = 'samurai-way/users/UNFOLLOW'
const SET_USERS = 'samurai-way/users/SET_USERS'
const SET_CURRENT_PAGE = 'samurai-way/users/SET_CURRENT_PAGE'
const SET_TOTAL_USERS = 'samurai-way/users/SET_TOTAL_USERS'
const TOGGLE_IS_FETCHING = 'samurai-way/users/TOGGLE_IS_FETCHING'
const TOGGLE_FOLLOWING_IN_PROGRESS = 'samurai-way/users/TOGGLE_FOLLOWING_IN_PROGRESS'

// action creators

export const followSuccess = (id: number) => ({type: FOLLOW, id: id}) as const
export const unfollowSuccess = (id: number) => ({type: UNFOLLOW, id: id}) as const
export const setUsers = (newUsers: UserType[]) => ({type: SET_USERS, newUsers: newUsers}) as const
export const setCurrentPage = (newCurrentPage: number) => ({
    type: SET_CURRENT_PAGE,
    newCurrentPage: newCurrentPage
}) as const
export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: SET_TOTAL_USERS,
    totalUsersCount: totalUsersCount
}) as const
export const toggleIsFetching = (isFetching: boolean) => ({type: TOGGLE_IS_FETCHING, isFetching: isFetching}) as const
export const toggleIsFollowingInProgress = (isFetching: boolean, id: number) => ({
    type: TOGGLE_FOLLOWING_IN_PROGRESS,
    isFetching: isFetching,
    id: id,
}) as const

// thunk creators

export const getUsers = (currentPage: number, pageSize: number) => async (dispatch: Dispatch) => {
    dispatch(toggleIsFetching(true))
    let data = await usersApi.getUsers(currentPage, pageSize)
    dispatch(setUsers(data.items))
    dispatch(setTotalUsersCount(data.totalCount))
    dispatch(toggleIsFetching(false))
    dispatch(setCurrentPage(currentPage))
}

const followUnfollowFlow = async (dispatch: Dispatch, userId: number, apiMethod: any, actionCreator: any) => {
    dispatch(toggleIsFollowingInProgress(true, userId))
    let response = await apiMethod(userId)
    if (response.data.resultCode === 0) {
        dispatch(actionCreator(userId))
    }
    dispatch(toggleIsFollowingInProgress(false, userId))
}

export const follow = (userId: number) => async (dispatch: Dispatch) => {
    let apiMethod = await usersApi.follow.bind(usersApi)
    let actionCreator = followSuccess
    followUnfollowFlow(dispatch, userId, apiMethod, actionCreator)
}
export const unFollow = (userId: number) => async (dispatch: Dispatch) => {
    let apiMethod = await usersApi.unFollow.bind(usersApi)
    let actionCreator = unfollowSuccess
    followUnfollowFlow(dispatch, userId, apiMethod, actionCreator)
}


// types

export type FollowACType = ReturnType<typeof followSuccess>
export type UnFollowACType = ReturnType<typeof unfollowSuccess>
export type SetUsersACType = ReturnType<typeof setUsers>
export type SetCurrentPageACType = ReturnType<typeof setCurrentPage>
export type SetTotalUsersCountACType = ReturnType<typeof setTotalUsersCount>
export type toggleIsFetchingACType = ReturnType<typeof toggleIsFetching>
export type toggleIsFollowingInProgress = ReturnType<typeof toggleIsFollowingInProgress>

type UsersACTypes =
    FollowACType
    | UnFollowACType
    | SetUsersACType
    | SetCurrentPageACType
    | SetTotalUsersCountACType
    | toggleIsFetchingACType
    | toggleIsFollowingInProgress


export type UserType = {
    id: number
    name: string
    uniqueUrlName?: string
    photos: {
        small?: string
        large?: string
    }
    status: string
    followed: boolean
}

type stateType = {
    users: UserType[]
    pageSize: number
    totalUsersCont: number
    currentPage: number
    isFetching: boolean
    folowingInProgress: Array<any>
}