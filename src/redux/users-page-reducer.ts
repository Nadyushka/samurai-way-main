import users from "../components/main/users/UsersFirst";

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_USERS = 'SET_TOTAL_USERS'

export const FollowAC = (id: number) => ({
    type: FOLLOW,
    id: id
}) as const

export const UnfollowAC = (id: number) => ({
    type: UNFOLLOW,
    id: id
}) as const

export const SetUsersAC = (newUsers: UserType[]) => ({
    type: SET_USERS,
    newUsers: newUsers
}) as const

export const setCurrentPageAC = (newCurrentPage: number) => ({
    type: SET_CURRENT_PAGE,
    newCurrentPage: newCurrentPage
}) as const

export const setTotalUsersCountAC = (totalUsersCount: number) => ({
    type: SET_TOTAL_USERS,
    totalUsersCount: totalUsersCount
}) as const

export type FollowACType = ReturnType<typeof FollowAC>
export type UnFollowACType = ReturnType<typeof UnfollowAC>
export type SetUsers = ReturnType<typeof SetUsersAC>
export type SetCurrentPage = ReturnType<typeof setCurrentPageAC>
export type SetTotalUsersCount = ReturnType<typeof setTotalUsersCountAC>

type UsersACTypes = FollowACType | UnFollowACType | SetUsers | SetCurrentPage |SetTotalUsersCount

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

type initialStateType = {
    users: Array<any>
    pageSize: number
    totalUsersCont: number
    currentPage: number
}

type stateType = {
    users: UserType[]
    pageSize: number
    totalUsersCont: number
    currentPage: number
}

let initialState: initialStateType = {
    users: [],
    pageSize: 5,
    totalUsersCont: 0,
    currentPage: 1,
}


export const UserPageReducer = (state: initialStateType = initialState, action: UsersACTypes): stateType => {
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
                users: [...action.newUsers,...state.users]
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
        default:
            return state
    }

}

