import {Dispatch} from "redux";
import {authApi} from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA'


export const setUserDataAC = (id: number | null, email: string | null, login: string | null, isAuth:boolean) => ({
    type: SET_USER_DATA,
    data: {
        id: id,
        email: email,
        login: login,
        isAuth:isAuth
    }
}) as const


export type setUserDataACType = ReturnType<typeof setUserDataAC>


export const getUserData = () => {
    return (dispatch: Dispatch) => {
        authApi.me()
            .then(response => {
                console.log(response)
                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    dispatch(setUserDataAC(id, email, login,true))
                }
            })
    }
}

export const login = (email: string, password: string, rememberMe: boolean = false) => {
    return (dispatch: any) => {
        authApi.login(email,password,rememberMe)
            .then((response)=>{

                if (response.data.resultCode === 0) {
                    let {id, email, login} = response.data.data;
                    dispatch(setUserDataAC(id, email, login,true))
                }
            })
    }
}

export const logout = () => {
    return (dispatch: any) => {
        authApi.logout()
            .then((response)=>{
                if (response.data.resultCode === 0) {
                    dispatch(setUserDataAC(null, null, null, false))
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
                isAuth: action.data.isAuth,
                data: {...action.data},

            }
        default:
            return state;
    }

}

