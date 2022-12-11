import React from 'react';
import s from './App.module.css';
import Header from "./components/header/header";
import Aside from "./components/aside/aside";
import Main from "./components/main/main";
import {BrowserRouter} from "react-router-dom";
import {state,addPost,changeNewPost} from "./redux/state";

const App = () => {
    const stateMe = state.stateAll;

    return (<BrowserRouter>
            <div className={s.App}>
                <Header/>
                <Aside/>
                <Main state={stateMe} addPost={addPost} changeNewPost={changeNewPost}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
