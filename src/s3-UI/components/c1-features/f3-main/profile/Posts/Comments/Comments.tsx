import React, {useState} from 'react';
import s from './Comments.module.css'
import faceIcon from '../../../../../../../s4-common/assets/pictures/Face.png'

type PropsType = {
    comments: Array<{ userName: string, comment: string }> | []
}

const Comments = ({comments}: PropsType) => {

    return (
        <div className={s.comments}>
            {comments.map((c, index) => {
                return (
                    <div key={index} className={s.comment}>
                        <div className={s.comment_userName}>{c.userName}
                            <img style={{width: '10px', height: '10px'}} src={faceIcon}/></div>
                        <div className={s.comment_text}>{c.comment}</div>
                    </div>
                )
            })}
            <input type={"text"} className={s.comments_input}/>
            <button type={'submit'} className={s.comments_button}>Add comment</button>
        </div>
    )
};

export default Comments;