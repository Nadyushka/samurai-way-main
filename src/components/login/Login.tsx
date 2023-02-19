import React from 'react';
import {Field, InjectedFormProps, reduxForm} from "redux-form";
import Textarea from "../commonComponents/FormsControl/FormsControl";
import {required} from "../../utils/validators";

type LoginFormType = {
    login: string
    password: string
    rememberMe: string
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
        <div>
            <button>Login</button>
        </div>
    </form>
}

const LoginReduxForm = reduxForm<LoginFormType>({form: 'Login'})(LoginForm)

const Login = () => {

    const onSubmitHandler = (formData: LoginFormType) => {
        console.log(formData)
    }

    return (
        <div>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmitHandler}/>
        </div>
    );
};

export default Login;