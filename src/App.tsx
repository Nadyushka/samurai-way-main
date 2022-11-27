import React from 'react';
import s from './App.module.css';
import Header from "./components/header/header";
import Aside from "./components/aside/aside";
import Main from "./components/main/main";
import {BrowserRouter} from "react-router-dom";
import {contactDataType, messageDataType, postsDataType} from './index'

type AppPropsType = {
    contactData: Array<contactDataType>
    messageData:messageDataType[]
    postsData:postsDataType[]
}

function App(props: AppPropsType) {
    return (<BrowserRouter>
            <div className={s.App}>
                <Header/>
                <Aside/>
                <Main contactData={props.contactData} messageData={props.messageData} postsData={props.postsData}/>
            </div>
        </BrowserRouter>
    );
}

export default App;
