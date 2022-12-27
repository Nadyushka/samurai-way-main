import React from 'react';
import s from './App.module.css';
import Header from "./components/header/header";
import Aside from "./components/aside/aside";
import Main from "./components/main/main";
import {BrowserRouter} from "react-router-dom";
import {store} from "./redux/state";


type PropsType = {
    store: any
    dispatch: any
}

const App = (props: PropsType) => {

    return (<BrowserRouter>
            <div className={s.App}>
                <Header/>
                <Aside/>
                <Main state={props.store}
                      dispatch={props.dispatch}
                />
            </div>
        </BrowserRouter>
    );
}

export default App;
