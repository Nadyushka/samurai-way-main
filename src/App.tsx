import React from 'react';
import s from './App.module.css';
import Header from "./components/header/header";
import Aside from "./components/aside/aside";
import Main from "./components/main/main";
import HeaderContainer from "./components/header/headerContainer";


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
