import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import Textarea, {createField} from "../commonComponents/FormsControl/FormsControl";
import {required} from "../../utils/validators";
import {connect} from "react-redux";
import {login} from '../../redux/auth-reducer';
import {Redirect} from "react-router-dom";
import {AppStateType} from "../../redux/redux-store";

type LoginFormType = {
    login: string
    password: string
    rememberMe: boolean
}

const LoginForm: React.FC<InjectedFormProps<LoginFormType>> = ({handleSubmit, error}) => {

    return <form onSubmit={handleSubmit}>
        {createField('Login', 'login', Textarea, [required])}
        {createField('Password', 'password', Textarea, [required], {type: 'password'})}
        {createField('', 'rememberMe', 'input', [], {type: 'checkbox'}, 'Remember me')}
        {error && <div style={{color: 'red'}}>{error}</div>}

        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm<LoginFormType>({form: 'login'})(LoginForm)

const Login = (props: mapDispatchToPropsType & mapStateToPropsType) => {

    const onSubmitHandler = (formData: LoginFormType) => {
        props.login(formData.login, formData.password, formData.rememberMe)
    }

    if (props.isAuth) {
        return <Redirect to={'/main/profile'}/>
    }
    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmitHandler}/>
        </div>
    )
}

type mapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void,
}

type mapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {isAuth: state.auth.isAuth}
}

export const LoginContainer = connect(mapStateToProps, {login})(Login)
export default Login;