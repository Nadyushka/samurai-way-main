import {Dispatch} from "redux";
import {authApi} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA'


export const setUserDataAC = (id: number | null, email: string | null, login: string | null) => ({
    type: SET_USER_DATA,
    data: {
        id: id,
        email: email,
        login: login,
    }
}) as const


export type setUserDataACType = ReturnType<typeof setUserDataAC>


export const getUserData = () =>{
    return (dispatch: Dispatch) => {
        authApi.me()
            .then(response => {
                if (response.data.resultCode === 0) {
                    let {id,email,login} = response.data.data;
                    dispatch(setUserDataAC(id, email, login))
                }
            })
    }
}


export type initialStateType = {
    data: {
        id: number | null
        email: string | null
        login: string | null
    },
    isAuth: boolean
}

let initialState: initialStateType = {
    data: {
        id: null,
        email: null,
        login: null,
    },
    isAuth: false,
}


export const authReducer = (state: initialStateType = initialState, action: setUserDataACType): initialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                data: {...action.data},
                isAuth: true,
            }
        default:
            return state;
    }

}

