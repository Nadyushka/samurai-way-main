import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import './index.css';
import {store} from './redux/redux-store'
import {pagesTypes} from "./redux/state";

const renderTree = (state:pagesTypes) => {
    ReactDOM.render(
        <App store={state}
             dispatch={store.dispatch.bind(state)}
        />,
        document.getElementById('root')
    );
}
renderTree(store.getState())

store.subscribe( () => {
    let state = store.getState()
    renderTree(state)
})




