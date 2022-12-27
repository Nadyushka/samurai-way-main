import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import './index.css';
import {store} from './redux/redux-store'
import {pagesTypes} from "./redux/state";
import {BrowserRouter} from "react-router-dom";
import StoreContext from "./StoreContext";

const renderTree = (state:pagesTypes) => {
    ReactDOM.render(
        <BrowserRouter>
            <StoreContext.Provider value={store.getState()}>
        <App store={state}
             dispatch={store.dispatch.bind(state)}
        />
            </StoreContext.Provider>
        </BrowserRouter>,
        document.getElementById('root')
    );
}
renderTree(store.getState())

store.subscribe( () => {
    let state = store.getState()
    renderTree(state)
})




