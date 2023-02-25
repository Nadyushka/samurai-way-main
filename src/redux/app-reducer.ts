import {getUserData} from "./auth-reducer";

const INITIALIZED_SUCCESS = 'INITIALIZED_SUCCESS'


export const setInitializedSuccessAC = () => ({
    type: INITIALIZED_SUCCESS,
}) as const

export type setInitializedSuccessACType = ReturnType<typeof setInitializedSuccessAC>

export const initializeApp = () => (dispatch:any) => {
    dispatch(getUserData())
        .then(()=>{
            dispatch(setInitializedSuccessAC())
        })
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

export type initialStateType = {
    initialized: boolean
}

let initialState: initialStateType = {
    initialized: false,
}