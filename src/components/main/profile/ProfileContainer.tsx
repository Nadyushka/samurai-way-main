import React from 'react';
import Profile from "./profile";
import {connect} from "react-redux";
import {getUsersProfile, ProfilePageType} from "../../../redux/profile-pages-reducer";
import {AppStateType} from "../../../redux/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../../hoc/WithAuthRedirect";
import {compose} from "redux";

type PathParamsType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType
type mapStatePropsType = {
    profile: ProfilePageType | null
}
type mapsDispatchToProps = {
    getUsersProfile: (userId: string) => void
}

type OwnPropsType = mapStatePropsType & mapsDispatchToProps

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId: string;
        this.props.match.params.userId ? userId = this.props.match.params.userId : userId = '2'
        this.props.getUsersProfile(userId)
    }

    render() {
        return (
            <Profile {...this.props} profile={this.props.profile}/>
        );
    }
};

// let WithUrlDataContainerComponent = withRouter(ProfileContainer)
//
// export default WithAuthRedirect(connect(mapStateProps, {getUsersProfile})(WithUrlDataContainerComponent))

let mapStateProps = (state: AppStateType): mapStatePropsType => ({
    profile: state.profilePages.profile,
})

export default compose<React.ComponentType>(
    connect(mapStateProps, {getUsersProfile}),
    withRouter,
    WithAuthRedirect,
)(ProfileContainer)