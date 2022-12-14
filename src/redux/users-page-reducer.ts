const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

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

export type FollowACType = ReturnType<typeof FollowAC>
export type UnFollowACType = ReturnType<typeof UnfollowAC>
export type SetUsers = ReturnType<typeof SetUsersAC>

type UsersACTypes = FollowACType | UnFollowACType | SetUsers

export type UserType = {
    id: number
    name: string
    uniqueUrlName?: string
    photos: {
        small?:string
        large?:string
    }
    status: string
    followed: boolean
}

let initialState: UserType[] = []

export const UserPageReducer = (state: UserType[] = initialState, action: UsersACTypes): UserType[] => {
    switch (action.type) {
        case FOLLOW:
            return state.map(u => {
                if (u.id === action.id) {
                    return {...u, followed: true}
                } else {
                    return u
                }
            })
        case UNFOLLOW:
            return state.map(u => {
                if (u.id === action.id) {
                    return {...u, followed: false}
                } else {
                    return u
                }
            })
        case SET_USERS:
            return [...state, ...action.newUsers]
        default:
            return state
    }

}

