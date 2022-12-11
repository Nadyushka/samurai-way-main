import {state, subscriber} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";
import './index.css';

const renderTree = () => {
    ReactDOM.render(
        <App state={state}/>,
        document.getElementById('root')
    );
}

renderTree()
subscriber(renderTree)


