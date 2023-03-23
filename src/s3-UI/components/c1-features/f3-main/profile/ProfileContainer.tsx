import React from 'react';
import Profile from "./profile";
import {connect} from "react-redux";
import {getStatus, getUsersProfile, ProfilePageType, updateStatus} from "../../../../../s2-BLL/profile-pages-reducer";
import {AppStateType} from "../../../../../s2-BLL/redux-store";
import {RouteComponentProps, withRouter} from "react-router-dom";
import {WithAuthRedirect} from "../../../../hoc/WithAuthRedirect";
import {compose} from "redux";

type PathParamsType = {
    userId: string
}

type PropsType = RouteComponentProps<PathParamsType> & OwnPropsType

type mapStatePropsType = {
    profile: ProfilePageType | null
    status: string | null
    isAuth: boolean
    autorizedId: number | null
}
type mapsDispatchToProps = {
    getUsersProfile: (userId: string) => void,
    getStatus: (status: string) => void,
    updateStatus: (status: string) => void,
}

type OwnPropsType = mapStatePropsType & mapsDispatchToProps

class ProfileContainer extends React.Component<PropsType> {

    componentDidMount() {
        let userId: any;
        this.props.match.params.userId ? userId = this.props.match.params.userId :
            // userId = '27362'
            userId = this.props.autorizedId?.toString() || this.props.history.push('/c3-login')

        console.log(this.props.match)
        console.log(this.props.history)

        this.props.getUsersProfile(userId)
        this.props.getStatus(userId)
    }

    render() {
        return (
            <Profile {...this.props}
                     profile= {this.props.profile}
                     status = {this.props.status}
                     updateStatus = {this.props.updateStatus}
            />
        );
    }
};

// let WithUrlDataContainerComponent = withRouter(ProfileContainer)
//
// export default WithAuthRedirect(connect(mapStateProps, {getUsersProfile})(WithUrlDataContainerComponent))

let mapStateProps = (state: AppStateType): mapStatePropsType => ({
    profile: state.profilePages.profile,
    status: state.profilePages.status,
    isAuth: state.auth.isAuth,
    autorizedId: state.auth.data.id
})

export default compose<React.ComponentType>(
    connect(mapStateProps, {getUsersProfile, getStatus,updateStatus}),
    withRouter,
    WithAuthRedirect,
)(ProfileContainer)