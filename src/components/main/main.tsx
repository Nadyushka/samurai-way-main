import React from 'react';
import s from "./main.module.css"
import Profile from "./profile/profile";
import Messages from "./Messages/messages";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import {contactDataType} from './../../index'

type mainPropsType = {
    contactData: contactDataType[]
}

const Main = (props: mainPropsType) => {
    return (
        <div className={s.main}>
            <Switch>
                <Route exact path="/main/profile" render={() => <Profile/>}/>
                <Route exact path="/main/messages" render={() => <Messages contactData={props.contactData}/>}/>
                {/* Route exact path="/main/news" render={() => <News/>} */}
                {/* <Music/> */}
                {/* <Messages/> */}
                {/* <Settings/> */}
            </Switch>
        </div>

    );
}

export default Main;