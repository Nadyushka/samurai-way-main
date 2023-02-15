import React, {ChangeEvent} from 'react';
import s from './dialogs.module.css'
import Message from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";
import {Field, Form, InjectedFormProps, reduxForm} from "redux-form";


const Dialogs = (props: DialogsPropsType) => {

    const onClickButtonSendHandler = (values: AddMessageFormType) => {
        props.onClickButtonSendHandler(values.newMessageBody)
    }
    
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsBody}>
                {props.dialogs.map((message) => <Message key={message.id} id={message.id} message={message.message}/>)}
            </div>
            <div className={s.dialogsInput}>

                <AddMessageFormRedux onSubmit={onClickButtonSendHandler}/>

            </div>
        </div>
    );
};

export default Dialogs;

type AddMessageFormType = {
    newMessageBody: string
}

export const AddMessageForm: React.FC<InjectedFormProps<AddMessageFormType>> = (props) => {
    return (
        <Form onSubmit={props.handleSubmit}>
            <Field placeholder={'write your message'} component={'input'} name={'newMessageBody'}/>
            <button>Send message</button>
        </Form>
    )
}

const AddMessageFormRedux = reduxForm<AddMessageFormType>({form: 'AddMessageForm'})(AddMessageForm)