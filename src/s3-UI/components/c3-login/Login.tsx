import React, {useEffect, useState} from 'react';
import {InjectedFormProps, reduxForm} from "redux-form";
import Textarea, {createField} from "../c2-commonComponents/FormsControl/FormsControl";
import {required} from "../../../s4-common/utils/validators";
import {connect} from "react-redux";
import {login} from '../../../s2-BLL/auth-reducer';
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../../s2-BLL/redux-store";
import s from './Login.module.css'

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
        <div className={s.loginMain_email}>{createField('Login', 'login', Textarea, [required])} </div>
        <div
            className={s.loginMain_password}> {createField('Password', 'password', Textarea, [required], {type: 'password'})}</div>
        <div
            className={s.loginMain_rememberMe}> {createField('', 'rememberMe', 'input', [], {type: 'checkbox'}, 'Remember me')}</div>
        {error && <div className={s.loginMain_error}>{error}</div>}


        {captchaUrl &&
            <img style={{width: '300px', height: '100px', margin: '0px', borderRadius: '5px'}} src={captchaUrl}/>}
        {captchaUrl && createField('Symbols from image', 'captchaUrl', 'input', [required])}

        <div>
            <button type={'submit'} className={s.loginMain_buttonSubmit}>Sign In</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm<LoginFormType, LoginFormOwnProps>({form: 'login'})(LoginForm)

const Login = (props: mapDispatchToPropsType & mapStateToPropsType) => {

    const [authorised, setAuthorised] = useState<boolean>(false)

    const onSubmitHandler = (formData: LoginFormType) => {
        props.login(formData.login, formData.password, formData.rememberMe, formData.captchaUrl)
    }

    useEffect(()=>{
        setAuthorised(props.isAuth)
    },[props.isAuth])

    if (props.isAuth) {
        return <Redirect to={'/f3-main/profile'}/>
    }


    return (
        <div className={s.loginMain}>
            <p>
                To log in get registered <a href={'https://social-network.samuraijs.com/'}
                                            target={'_blank'}>here</a>
            </p>
            <p>
                or use common test account credentials:
            </p>
            <p> Email: free@samuraijs.com
            </p>
            <p>
                Password: free
            </p>
            <h1 className={s.loginMain_header}>Login</h1>
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
