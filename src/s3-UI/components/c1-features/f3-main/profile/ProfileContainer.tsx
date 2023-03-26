import React from 'react';
import Profile from "./profile";
import {connect} from "react-redux";
import {
    getStatus,
    getUsersProfile,
    onChangePhoto,
    ProfilePageType,
    updateStatus
} from "../../../../../s2-BLL/profile-pages-reducer";
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
    onChangePhoto: (photo: File) => void
}

type OwnPropsType = mapStatePropsType & mapsDispatchToProps

class ProfileContainer extends React.Component<PropsType> {

    refreshProfile() {
        let userId: any;
        this.props.match.params.userId ? userId = this.props.match.params.userId :
            userId = this.props.autorizedId?.toString() || this.props.history.push('/c3-login')

        this.props.getUsersProfile(userId)
        this.props.getStatus(userId)
    }

    componentDidMount() {
        this.refreshProfile()
    }

    componentDidUpdate(prevProps: Readonly<PropsType>, prevState: Readonly<{}>, snapshot?: any) {
        if ( this.props.match.params.userId !==  prevProps.match.params.userId) {
            this.refreshProfile()
        }
    }

    render() {
        return (
            <Profile {...this.props}
                     profile={this.props.profile}
                     status={this.props.status}
                     updateStatus={this.props.updateStatus}
                     isOwner={!this.props.match.params.userId}
                     onChangePhoto={this.props.onChangePhoto}
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
    connect(mapStateProps, {getUsersProfile, getStatus, updateStatus,onChangePhoto}),
    withRouter,
    WithAuthRedirect,
)(ProfileContainer)