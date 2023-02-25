import React from 'react';
import s from './App.module.css';
import Aside from "./components/aside/aside";
import HeaderContainer from "./components/header/headerContainer";
import Main from "./components/main/main";


const App = () => {

    return (
        <div className={s.App}>
            <HeaderContainer/>
            <Aside/>
            <Main/>
        </div>

    );
}

export default App;
