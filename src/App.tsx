import React from 'react';
import s from './App.module.css';
import Header from "./components/header/header";
import Aside from "./components/aside/aside";
import Main from "./components/main/main";
import {BrowserRouter} from "react-router-dom";
import {storeType} from "./redux/state";


type PropsType = {
    store: storeType
}

const App = (props: PropsType) => {

    return (<BrowserRouter>
            <div className={s.App}>
                <Header/>
                <Aside/>
                <Main state={props.store._getState().stateAll}
                      addPost={props.store.addPost.bind(props.store)}
                      changeNewPost={props.store.changeNewPost.bind(props.store)}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
