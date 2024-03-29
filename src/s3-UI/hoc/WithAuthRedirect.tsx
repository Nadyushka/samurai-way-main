import React, {ComponentType} from 'react';
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../s2-BLL/redux-store";
import {connect} from "react-redux";


type mapStateToPropsRedirectType = {
    isAuth: boolean
}

const mapStateToPropsRedirect = (state: AppStateType): mapStateToPropsRedirectType => {
    return {
        isAuth: state.auth.isAuth
    }
}

export function WithAuthRedirect<T>(Component: ComponentType<T>) {

    const RedirectComponent = (props: mapStateToPropsRedirectType) => {
        let {isAuth, ...restProps} = props
        if (!isAuth) {
            return <Redirect to={'/c3-login'}/>
        }
        return <Component {...restProps as T}/>
    }


    let ConnectedAuthRedirectComponent = connect(mapStateToPropsRedirect)(RedirectComponent)

    return ConnectedAuthRedirectComponent
};
