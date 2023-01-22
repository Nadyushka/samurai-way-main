const SET_USER_DATA = 'SET_USER_DATA'


export const setUserDataAC = (id: number | null, email: string | null, login: string | null) => ({
    type: SET_USER_DATA,
    data: {
        id,
        email,
        login,
    }
}) as const


export type setUserDataACType = ReturnType<typeof setUserDataAC>


export type initialStateType = {
    data: {
        id: number | null
        email: string | null
        login: string | null
    },
    isFetching: boolean
}

let initialState: initialStateType = {
    data: {
        id: null,
        email: null,
        login: null,
    },
    isFetching: false,
}


export const authReducer = (state: initialStateType = initialState, action: setUserDataACType): initialStateType => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                data: {
                    ...state.data,
                    id: action.data.id, email: action.data.email, login: action.data.login
                },
                isFetching: true,
            }
        default:
            return state;
    }

}

