import {Dispatch} from "redux";
import {authApi, securityApi} from "../s1-DAL/api";
import {stopSubmit} from "redux-form";

export const authReducer = (state: initialStateType = initialState, action: setUserDataACType | setCaptchaACType): initialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                isAuth: action.data.isAuth,
                data: {...action.data},
            }
        case GET_CAPTCHA_URL:
            return {
                ...state,
                data: {...state.data, captchaUrl: action.captchaUrl}
            }
        default:
            return state;
    }

}

let initialState = {
    data: {
        id: null as (number | null),
        email: null as string | null,
        login: null as string | null,
        captchaUrl: null as string | null
    },
    isAuth: false,
}

// const

const SET_USER_DATA = 'samurai-way/auth/SET_USER_DATA'
const GET_CAPTCHA_URL = 'samurai-way/auth/GET_CAPTCHA_URL'

// action creators

export const setUserDataAC = (id: number | null, email: string | null, login: string | null, isAuth: boolean, captchaUrl: string | null = null) => ({
    type: SET_USER_DATA,
    data: {
        id: id,
        email: email,
        login: login,
        isAuth: isAuth,
        captchaUrl: captchaUrl
    }
}) as const

export const setCaptchaAC = (captchaUrl: string) => ({
    type: GET_CAPTCHA_URL,
    captchaUrl
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

export const getCaptchaUrlTC = () => {
    return async (dispatch: Dispatch) => {
        let response = await securityApi.getCaptchaUrl()
        dispatch(setCaptchaAC(response.data.url))
    }
}

export const login = (email: string, password: string, rememberMe: boolean, captchaUrl: string) => {
    return async (dispatch: any) => {
        let response = await authApi.login(email, password, rememberMe, captchaUrl)
        if (response.data.resultCode === 0) {
            dispatch(getUserData())
        } else {
            if (response.data.resultCode === 10) {
                dispatch(getCaptchaUrlTC())
            }
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
export type setCaptchaACType = ReturnType<typeof setCaptchaAC>


export type initialStateType = {
    data: {
        id: number | null
        email: string | null
        login: string | null
        captchaUrl: string | null
    },
    isAuth: boolean
}