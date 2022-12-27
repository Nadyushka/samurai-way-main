import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import './index.css';
import {store} from './redux/redux-store'

const renderTree = (state:any) => {
    ReactDOM.render(
        <App store={state}/>,
        document.getElementById('root')
    );
}
renderTree(store.getState())

store.subscribe( () => {
    let state = store.getState()
    renderTree(state)
})


