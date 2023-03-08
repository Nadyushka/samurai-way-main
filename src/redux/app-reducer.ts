import {getUserData} from "./auth-reducer";

let initialState: initialStateType = {
    initialized: false,
}

export const appReducer = (state: initialStateType = initialState, action: setInitializedSuccessACType): initialStateType => {
    switch (action.type) {
        case INITIALIZED_SUCCESS:
            return {
                ...state,
                initialized: true
            }
        default:
            return state;
    }
}

// const

const INITIALIZED_SUCCESS = 'samurai-way/app/INITIALIZED_SUCCESS'

// action creators

export const setInitializedSuccessAC = () => ({
    type: INITIALIZED_SUCCESS,
}) as const

// thunk creators

export const initializeApp = () => async (dispatch: any) => {
    await dispatch(getUserData())
    dispatch(setInitializedSuccessAC())
}

// types

export type setInitializedSuccessACType = ReturnType<typeof setInitializedSuccessAC>
export type initialStateType = {
    initialized: boolean
}