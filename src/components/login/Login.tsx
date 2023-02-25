import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import Textarea from "../commonComponents/FormsControl/FormsControl";
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

const LoginForm: React.FC<InjectedFormProps<LoginFormType>> = (props) => {


    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder={'Login'} name={'login'} component={Textarea} validate={[required]}/>
        </div>
        <div>
            <Field type={'password'} name={'password'} placeholder={'Password'} component={Textarea}
                   validate={[required]}/>
        </div>
        <div>
            <Field type={'checkbox'} name={'rememberMe'} component={'input'}/> Remember me
        </div>

        {props.error && <div style={{border: '1px solid red'}}>{props.error}</div>}

        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm<LoginFormType>({form: 'Login'})(LoginForm)

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
        ;
}


type mapDispatchToPropsType = {
    login: (email: string, password: string, rememberMe: boolean) => void,
}

type mapStateToPropsType = {
    isAuth: boolean
}

const mapStateToProps = (state: AppStateType): mapStateToPropsType => {
    return {
        isAuth: state.auth.isAuth
    }
}


export const LoginContainer = connect(mapStateToProps, {login})(Login)

export default Login;