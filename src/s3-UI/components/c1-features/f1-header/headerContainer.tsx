import React from 'react';
import Header from './header'
import {connect} from "react-redux";
import {getUserData, initialStateType, logout} from "../../../../s2-BLL/auth-reducer";
import {AppStateType} from "../../../../s2-BLL/redux-store";

class HeaderContainer extends React.Component<HeaderContainerType, initialStateType> {
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state: AppStateType): mapStateToProsType => {
    return {
        data: state.auth.data,
        isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToProps, {getUserData, logout})(HeaderContainer);

// types


export type HeaderContainerType = mapStateToProsType & mapDispatchToProsType
type mapStateToProsType = initialStateType
type mapDispatchToProsType = {
    getUserData: () => void
    logout: () => void
}