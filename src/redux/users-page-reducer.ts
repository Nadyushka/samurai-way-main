const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS = 'SET_TOTAL_USERS'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_FOLLOWING_IN_PROGRESS = 'TOGGLE_FOLLOWING_IN_PROGRESS'

export const follow = (id: number) => ({
    type: FOLLOW,
    id: id
}) as const

export const unfollow = (id: number) => ({
    type: UNFOLLOW,
    id: id
}) as const

export const setUsers = (newUsers: UserType[]) => ({
    type: SET_USERS,
    newUsers: newUsers
}) as const

export const setCurrentPage = (newCurrentPage: number) => ({
    type: SET_CURRENT_PAGE,
    newCurrentPage: newCurrentPage
}) as const

export const setTotalUsersCount = (totalUsersCount: number) => ({
    type: SET_TOTAL_USERS,
    totalUsersCount: totalUsersCount
}) as const

export const toggleIsFetching = (isFetching: boolean) => ({
    type: TOGGLE_IS_FETCHING,
    isFetching: isFetching
}) as const

export const toggleIsFollowingInProgress = (folowingInProgress: boolean) => ({
    type: TOGGLE_FOLLOWING_IN_PROGRESS,
    folowingInProgress: folowingInProgress
}) as const

export type FollowACType = ReturnType<typeof follow>
export type UnFollowACType = ReturnType<typeof unfollow>
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
    folowingInProgress: boolean
}

let initialState: stateType = {
    users: [],
    pageSize: 5,
    totalUsersCont: 0,
    currentPage: 1,
    isFetching: true,
    folowingInProgress: false,
}


export const UserPageReducer = (state: stateType = initialState, action: UsersACTypes): stateType => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: true}
                    } else {
                        return u
                    }
                })
            }
        case UNFOLLOW:
            return {
                ...state,
                users: state.users.map(u => {
                    if (u.id === action.id) {
                        return {...u, followed: false}
                    } else {
                        return u
                    }
                })
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
                folowingInProgress: action.folowingInProgress,
            }
        default:
            return state
    }

}

