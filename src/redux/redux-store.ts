import {combineReducers, createStore} from "redux";
import {profilePageReducer} from "./profile-pages-reducer";
import {messagePageReducer} from "./message-page-reducer";




let reducer = combineReducers({
        profilePages: profilePageReducer,
        messagePages: messagePageReducer
})

export type AppStateType = ReturnType<typeof reducer>

export let store = createStore(reducer)

