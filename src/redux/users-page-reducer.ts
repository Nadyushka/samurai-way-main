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
    fullName: {
        name: string
        surname: string
    }
    photo: string
    address: {
        city: string
        country: string
    }
    status: string
    follow: boolean
}

let initialState: UserType[] = []

export const UserPageReducer = (state: UserType[] = initialState, action: UsersACTypes): UserType[] => {
    switch (action.type) {
        case FOLLOW:
            return state.map(u => {
                if (u.id === action.id) {
                    return {...u, follow: true}
                } else {
                    return u
                }
            })
        case UNFOLLOW:
            return state.map(u => {
                if (u.id === action.id) {
                    return {...u, follow: false}
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

