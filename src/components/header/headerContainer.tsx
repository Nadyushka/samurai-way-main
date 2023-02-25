import React from 'react';
import Header from './header'
import {connect} from "react-redux";
import {getUserData, initialStateType, logout, setUserDataAC, setUserDataACType} from "../../redux/auth-reducer";
import {AppStateType} from "../../redux/redux-store";



export type HeaderContainerType = mapStateToProsType & mapDispatchToProsType

class HeaderContainer extends React.Component<HeaderContainerType, initialStateType> {

    componentDidMount() {
        this.props.getUserData()
    }

    render() {
        return <Header {...this.props} />
    }
}


type mapStateToProsType = initialStateType


type mapDispatchToProsType = {
    getUserData: () => void
    logout: () => void
}

const mapStateToPros = (state: AppStateType): mapStateToProsType => {
    return {
        data: state.auth.data,
        isAuth: state.auth.isAuth,
    }
}

export default connect(mapStateToPros, {getUserData, logout})(HeaderContainer);