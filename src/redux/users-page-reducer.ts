

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET_USERS'

export const FollowAC = () => ({
    type: FOLLOW
}) as const

export const UnfollowAC = () => ({
    type: UNFOLLOW
}) as const

export const SetUsersAC = () => ({
    type: SET_USERS
}) as const

export type FollowACType = ReturnType<typeof FollowAC>
export type UnFollowACType = ReturnType<typeof UnfollowAC>
export type SetUsers = ReturnType<typeof SetUsersAC>

type UsersACTypes = FollowACType | UnFollowACType | SetUsers

export type UserType = {
    id: number
    fullName: {
        name:string
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

type UsersType = {
    users:UserType[]
}

let initialState:UsersType = {
   users: [
       {id: 1, fullName: {name: 'Bizon', surname:'Biz'}, photo: ' ',address:{city:'Minsk', country:'Belarus'}, follow: false, status:"I am happy"},
       {id: 2, fullName: {name: 'Rick', surname:'R'}, photo: ' ',address:{city:'Minsk', country:'Belarus'}, follow: true, status:"I am a boss"},
       {id: 3, fullName: {name: 'Panda', surname:'Junior'}, photo: ' ',address:{city:'Minsk', country:'Belarus'}, follow: true, status:"I am panda"}
   ]
}



export const UserPageReducer = (state: UsersType = initialState, action: UsersACTypes): any => {
    switch (action.type) {
        case FOLLOW:
            return []

    }


    return state;

}

