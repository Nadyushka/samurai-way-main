import React, {ChangeEvent, createRef, useEffect, useRef, useState} from 'react';
import s from './dialogs.module.css'
import Message from "./Message/Message";
import {DialogsPropsType} from "./DialogsContainer";


const Dialogs = (props: DialogsPropsType) => {

    const [newMessage, setNewMessage] = useState<string>('')

    const onClickButtonSendHandler = () => {
        props.addNewMessageActionCreator(newMessage, props.myMessages ? 1 : 2)
        setNewMessage('')
    }

    const messageRef = useRef<HTMLDivElement>(null)

    useEffect(() => {
            const domNode = messageRef.current;
            if (domNode) {
                domNode.scrollTop = domNode.scrollHeight;
            }
        }
        , [props.dialogs]);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsBody} ref={messageRef}>
                <div className={s.dialogsBody_container}>
                    {props.dialogs.map((m) =>
                        <Message key={m.id} id={m.id} message={m.message} myMessages={props.myMessages}
                                 userPhoto={props.userPhoto}/>)}
                </div>

            </div>
            <div className={s.dialogsInput}>

                <input name={'newMessageBody'}
                       value={newMessage}
                       onChange={(e) => setNewMessage(e.currentTarget.value)}
                />
                <button disabled={newMessage.length === 0}
                        type={'submit'}
                        onClick={onClickButtonSendHandler}>
                    Send message
                </button>

            </div>
        </div>
    );
};

export default Dialogs;

