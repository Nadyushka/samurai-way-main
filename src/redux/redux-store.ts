import {combineReducers, createStore} from "redux";
import {profilePageReducer} from "./profile-pages-reducer";
import {messagePageReducer} from "./message-page-reducer";

let reducers = combineReducers({
        profilePages: profilePageReducer,
        messagePages: messagePageReducer
})

export let store = createStore(reducers)
