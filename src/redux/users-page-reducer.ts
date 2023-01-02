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

let initialState: UserType[] = [
        {
            id: 1,
            fullName: {name: 'Bizon', surname: 'Biz'},
            photo: 'https://i.pinimg.com/736x/1e/e4/9c/1ee49c569ceea55206d0c05bdaa8be32.jpg',
            address: {city: 'Minsk', country: 'Belarus'},
            follow: false,
            status: "I am happy"
        },
        {
            id: 2,
            fullName: {name: 'Rick', surname: 'R'},
            photo: ' ',
            address: {city: 'Minsk', country: 'Belarus'},
            follow: true,
            status: "I am a boss"
        },
        {
            id: 3,
            fullName: {name: 'Panda', surname: 'Junior'},
            photo: ' ',
            address: {city: 'Minsk', country: 'Belarus'},
            follow: true,
            status: "I am a panda"
        }
]

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

