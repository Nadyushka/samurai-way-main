import {allStateTypes} from "./redux/state";
import ReactDOM from "react-dom";
import App from "./App";
import React from "react";


export const renderTree = (state:allStateTypes) => {
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );
}