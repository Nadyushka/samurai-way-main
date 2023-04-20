import React from 'react';
import s from "./message.module.css";
import friendImg from '../../../../../../../s4-common/assets/pictures/friendImg.png'

type MessagePropsType = {
    id: number
    message: { messageText: string, userId: number }
    myMessages: boolean
    userPhoto: string | null | undefined

}

const Message = (props: MessagePropsType) => {

    const finalClassName = props.myMessages ? `${s.message} ${s.myMessage}` : `${s.message}`


    if (props.message.userId === 1) {
        return <div className={finalClassName}>
            {props.myMessages && <div style={{textAlign: 'right'}}>
                <span className={s.dialog}>{props.message.messageText}</span>
                <img
                    src={props.userPhoto ? props.userPhoto : 'https://i.pinimg.com/736x/1e/e4/9c/1ee49c569ceea55206d0c05bdaa8be32.jpg'}/>
            </div>}
            {!props.myMessages && <div style={{textAlign: 'left'}}>
                <img src={props.userPhoto ? props.userPhoto : 'https://i.pinimg.com/736x/1e/e4/9c/1ee49c569ceea55206d0c05bdaa8be32.jpg'}/>
                <span className={s.dialog}>{props.message.messageText} </span>
            </div>}
        </div>
    } else {
        return <div className={finalClassName}>
            {!props.myMessages && <div style={{textAlign: 'right'}}>
                <span className={s.dialog}>{props.message.messageText}</span>
                <img src={friendImg}/>
            </div>}
            {props.myMessages && <div style={{textAlign: 'left'}}>
                <img src={friendImg}/>
                <span className={s.dialog}>{props.message.messageText} </span>
            </div>}
        </div>
    }

    // return (
    //     <div className={finalClassName}>
    //         {props.message.userId === 1 && <>
    //          <span className={s.dialog}>{props.message.messageText}</span>
    //             <img src={friendImg}/>
    //         </>}
    //         {props.message.userId === 2 && <>
    //             <img src={friendImg}/>
    //             <span className={s.dialog}>{props.message.messageText} </span>
    //         </>}
    //     </div>
    // );
};

export default Message;