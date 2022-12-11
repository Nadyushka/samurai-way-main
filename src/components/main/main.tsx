import React from 'react';
import s from "./main.module.css"
import Profile from "./profile/profile";
import Messages from "./Messages/messages";
import {Route, Switch} from "react-router-dom"
import {changeNewPost, pagesTypes} from "../../redux/state";

type PropsType = {
    state: pagesTypes
    addPost: (newPost: string) => void
    changeNewPost: (newPost: string) => void
}

const Main: React.FC<PropsType> = ({state, addPost,changeNewPost}) => {
    return (
        <div className={s.main}>
            <Switch>
                <Route exact path="/main/profile" render={() => <Profile
                    profilePages={state.profilePages}
                    addPost={addPost}
                    changeNewPost={changeNewPost}
                />}
                />
                <Route exact path="/main/messages" render={() => <Messages messagePages={state.messagePages}/>}/>
                {/* Route exact path="/main/news" render={() => <News/>} */}
                {/* <Music/> */}
                {/* <Messages/> */}
                {/* <Settings/> */}
            </Switch>
        </div>

    );
}

export default Main;