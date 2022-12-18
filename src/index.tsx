import {store} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import './index.css';

const renderTree = () => {
    ReactDOM.render(
        <App store={store}/>,
        document.getElementById('root')
    );
}

store.subscriber(renderTree)
renderTree()

