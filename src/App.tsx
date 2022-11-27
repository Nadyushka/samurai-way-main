import React from 'react';
import s from'./App.module.css';
import Header from "./components/header/header";
import Aside from "./components/aside/aside";
import Main from "./components/main/main";
import {BrowserRouter} from "react-router-dom";


function App() {
    return (<BrowserRouter>
        <div className={s.App}>
            <Header/>
            <Aside/>
            <Main/>
        </div>
        </BrowserRouter>
    );
}

export default App;
