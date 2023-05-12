import React, {Suspense} from 'react';
import s from "./main.module.css"
// import Messages from "./Messages/messages";
import {Route, Switch, withRouter} from "react-router-dom"
import UsersContainerAdditional from "./users/UsersContainer";
// import ProfileContainer from "./profile/ProfileContainer";
import {LoginContainer} from "../../c3-login/Login";
import {connect} from "react-redux";
import {compose} from 'redux';
import {AppStateType} from "../../../../s2-BLL/redux-store";
import Preloader from "../../c2-commonComponents/preloader/Preloader";
import {initializeApp} from "../../../../s2-BLL/app-reducer";
import {News} from "./news/News";

const ProfileContainer = React.lazy(() => import("./profile/ProfileContainer"))
const Messages = React.lazy(() => import("./Messages/messages"))

type mapDispatchToProsType = {
    initializeApp: () => void
}

type MainContainerType = mapStateToPropsType & mapDispatchToProsType

class Main extends React.Component<MainContainerType, any> {

    componentDidMount() {
        this.props.initializeApp()
    }

    render() {

       if (!this.props.initialized) {return <Preloader/>}

        return (
            <div className={s.main}>
                <Switch>
                    <Route exact={true} path="/" render={() => <LoginContainer/>}/>
                    <Route path="/f3-main/profile/:userId?" render={() => {
                        return (
                            <Suspense fallback={<div><Preloader/></div>}>
                                <ProfileContainer/>
                            </Suspense>)
                    }}/>
                    <Route path="/f3-main/messages" render={() => {
                        return (
                            <Suspense fallback={<div><Preloader/></div>}>
                                <Messages/>
                            </Suspense>)
                    }}/>
                     <Route exact path="/f3-main/news" render={() => <News/>} />
                    {/* <Music/> */}


                    <Route path="/f3-main/users" render={() => <UsersContainerAdditional/>}/>

                    <Route path="/c3-login" render={() => <LoginContainer/>}/>
                    {/* <Settings/> */}

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

