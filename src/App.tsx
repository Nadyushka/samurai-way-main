import React from 'react';
import s from './App.module.css';
import Header from "./components/header/header";
import Aside from "./components/aside/aside";
import Main from "./components/main/main";
import {dispatchTypes, pagesTypes, store} from "./redux/state";



type PropsType = {
    store: pagesTypes
    dispatch: (action: dispatchTypes) => void
}

const App = (props: PropsType) => {

    return (
        <div className={s.App}>
            <Header/>
            <Aside/>
            <Main state={props.store}
                  dispatch={props.dispatch}
            />
        </div>

    );
}

export default App;
