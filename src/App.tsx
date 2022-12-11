import React from 'react';
import s from './App.module.css';
import Header from "./components/header/header";
import Aside from "./components/aside/aside";
import Main from "./components/main/main";
import {BrowserRouter} from "react-router-dom";
import {addPost, changeNewPost, allStateTypes} from "./redux/state";

type PropsType = {
    state: allStateTypes
}

const App = (props: PropsType) => {

    return (<BrowserRouter>
            <div className={s.App}>
                <Header/>
                <Aside/>
                <Main state={props.state.stateAll} addPost={addPost} changeNewPost={changeNewPost}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
