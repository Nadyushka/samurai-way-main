import React from 'react';
import s from './App.module.css';
import Aside from "./s3-UI/components/c1-features/f2-aside/aside";
import HeaderContainer from "./s3-UI/components/c1-features/f1-header/headerContainer";
import Main from "./s3-UI/components/c1-features/f3-main/main";


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
