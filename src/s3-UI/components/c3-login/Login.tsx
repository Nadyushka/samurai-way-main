import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import Textarea, {createField} from "../c2-commonComponents/FormsControl/FormsControl";
import {required} from "../../../s4-common/utils/validators";
import {connect} from "react-redux";
import {login} from '../../../s2-BLL/auth-reducer';
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../../s2-BLL/redux-store";

type LoginFormType = {
    login: string
    password: string
    rememberMe: boolean
    captchaUrl: string
}

type LoginFormOwnProps = {
    captchaUrl: string | null
}


const LoginForm: React.FC<InjectedFormProps<LoginFormType, LoginFormOwnProps> & LoginFormOwnProps> = ({
                                                                                                          handleSubmit,
                                                                                                          error,
                                                                                                          captchaUrl
                                                                                                      }) => {

    return <form onSubmit={handleSubmit}>
        {createField('Login', 'login', Textarea, [required])}
        {createField('Password', 'password', Textarea, [required], {type: 'password'})}
        {createField('', 'rememberMe', 'input', [], {type: 'checkbox'}, 'Remember me')}
        {error && <div style={{color: 'red'}}>{error}</div>}


        {captchaUrl && <img style={{width: '300px', height: '100px'}} src={captchaUrl}/>}
        {captchaUrl && createField('Symbols from image', 'captchaUrl', 'input', [required])}

        <div>
            <button type={'submit'}>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm<LoginFormType, LoginFormOwnProps>({form: 'login'})(LoginForm)

const Login = (props: mapDispatchToPropsType & mapStateToPropsType) => {

    const onSubmitHandler = (formData: LoginFormType) => {
        props.login(formData.login, formData.password, formData.rememberMe, formData.captchaUrl)
    }

    if (props.isAuth) {
        return <Redirect to={'/f3-main/profile'}/>
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm captchaUrl={props.captchaUrl} onSubmit={onSubmitHandler}/>
        </div>
    )
}

type mapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void,
}

type mapStateToPropsType = {
    isAuth: boolean
    captchaUrl: string | null
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth,
        captchaUrl: state.auth.data.captchaUrl
    }
}

export const LoginContainer = connect(mapStateToProps, {login})(Login)
