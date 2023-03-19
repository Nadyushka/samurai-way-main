import {Dispatch} from "redux";
import {authApi} from "../s1-DAL/api";
import {stopSubmit} from "redux-form";

export const authReducer = (state: initialStateType = initialState, action: setUserDataACType): initialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                isAuth: action.data.isAuth,
                data: {...action.data},
            }
        default:
            return state;
    }

}

let initialState: initialStateType = {
    data: {
        id: null,
        email: null,
        login: null,
    },
    isAuth: false,
}

// const

const SET_USER_DATA = 'samurai-way/auth/SET_USER_DATA'

// action creators

export const setUserDataAC = (id: number | null, email: string | null, login: string | null, isAuth: boolean) => ({
    type: SET_USER_DATA,
    data: {
        id: id,
        email: email,
        login: login,
        isAuth: isAuth
    }
}) as const

// thunk creators

export const getUserData = () => {
    return async (dispatch: Dispatch) => {
        let response = await authApi.me()
        if (response.data.resultCode === 0) {
            let {id, email, login} = response.data.data;
            dispatch(setUserDataAC(id, email, login, true))
        }
    }
}
export const login = (email: string, password: string, rememberMe: boolean = false) => {
    return async (dispatch: any) => {
        let response = await authApi.login(email, password, rememberMe)
        if (response.data.resultCode === 0) {
            dispatch(getUserData())
        } else {
            let errorMessage = response.data.messages[0].length > 0 ? response.data.messages[0] : 'Some error'
            dispatch(stopSubmit("login", {_error: errorMessage}))
        }

    }
}
export const logout = () => {
    return async (dispatch: any) => {
        let response = await authApi.logout()
        if (response.data.resultCode === 0) {
            dispatch(setUserDataAC(null, null, null, false))
        }
    }
}


// types

export type setUserDataACType = ReturnType<typeof setUserDataAC>

export type initialStateType = {
    data: {
        id: number | null
        email: string | null
        login: string | null
    },
    isAuth: boolean
}