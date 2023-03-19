import React, {Suspense} from 'react';
import s from "./main.module.css"
import Messages from "./Messages/messages";
import {Route, Switch, withRouter} from "react-router-dom"
import UsersContainerAdditional from "./users/UsersContainer";
// import ProfileContainer from "./profile/ProfileContainer";
import {LoginContainer} from "../../c3-login/Login";
import {connect} from "react-redux";
import {compose} from 'redux';
import {AppStateType} from "../../../../s2-BLL/redux-store";
import Preloader from "../../c2-commonComponents/preloader/Preloader";
import {initializeApp} from "../../../../s2-BLL/app-reducer";

const ProfileContainer = React.lazy(()=>import("./profile/ProfileContainer"))

type mapDispatchToProsType = {
    initializeApp: () => void
}

type MainContainerType = mapStateToPropsType & mapDispatchToProsType

class Main extends React.Component<MainContainerType, any> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {

        if (!this.props.initialized) {
            return <Preloader/>
        }

        return (
            <div className={s.main}>
                <Switch>
                    <Suspense fallback={<div><Preloader/></div>}>
                        <Route path="/main/profile/:userId?" render={() => <ProfileContainer/>}/>
                        <Route path="/main/messages" render={() => <Messages/>}/>
                        {/* Route exact path="/f3-main/news" render={() => <News/>} */}
                        {/* <Music/> */}
                        {/* <Messages/> */}

                        <Route path="/main/users" render={() => <UsersContainerAdditional/>}/>

                        <Route path="/login" render={() => <LoginContainer/>}/>
                        {/* <Settings/> */}
                    </Suspense>
                </Switch>
            </div>

        );
    }
}

type mapStateToPropsType = {
    initialized: boolean
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        initialized: state.app.initialized
    }
}

export default compose<React.ComponentType>(
    connect(mapStateToProps, {initializeApp}),
    withRouter
)(Main);

