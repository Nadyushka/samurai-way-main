import {applyMiddleware, combineReducers, createStore} from "redux";
import {profilePageReducer} from "./profile-pages-reducer";
import {messagePageReducer} from "./message-page-reducer";
import {UserPageReducer} from "./users-page-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'


let reducer = combineReducers({
        profilePages: profilePageReducer,
        messagePages: messagePageReducer,
        usersPages: UserPageReducer,
        auth: authReducer,
})

export type AppStateType = ReturnType<typeof reducer>

export let store = createStore(reducer, applyMiddleware(thunkMiddleware))

