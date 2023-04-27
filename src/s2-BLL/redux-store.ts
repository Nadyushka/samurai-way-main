import {applyMiddleware, combineReducers, createStore} from "redux";
import {profilePageReducer} from "./profile-pages-reducer";
import {messagePageReducer} from "./message-page-reducer";
import {UserPageReducer} from "./users-page-reducer";
import {authReducer} from "./auth-reducer";
import thunkMiddleware from 'redux-thunk'
import {reducer as formReducer} from 'redux-form'
import {appReducer} from "./app-reducer";
import {newsPageReducer} from "./news-page-reducer";


let reducer = combineReducers({
        profilePages: profilePageReducer,
        messagePages: messagePageReducer,
        usersPages: UserPageReducer,
        auth: authReducer,
        form: formReducer,
        app: appReducer,
        news: newsPageReducer
})

export type AppStateType = ReturnType<typeof reducer>

export let store = createStore(reducer, applyMiddleware(thunkMiddleware))

