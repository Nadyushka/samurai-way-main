import React from 'react';
import s from "./main.module.css"
import Profile from "./profile/profile";
import Messages from "./Messages/messages";
import {BrowserRouter, Route, Switch} from "react-router-dom"
import {contactDataType, messageDataType, postsDataType} from './../../index'

type mainPropsType = {
    contactData: contactDataType[]
    messageData: messageDataType[]
    postsData:postsDataType[]
}

const Main = (props: mainPropsType) => {
    return (
        <div className={s.main}>
            <Switch>
                <Route exact path="/main/profile" render={() => <Profile postsData={props.postsData}/>}/>
                <Route exact path="/main/messages" render={() => <Messages contactData={props.contactData} messageData={props.messageData}/>}/>
                {/* Route exact path="/main/news" render={() => <News/>} */}
                {/* <Music/> */}
                {/* <Messages/> */}
                {/* <Settings/> */}
            </Switch>
        </div>

    );
}

export default Main;