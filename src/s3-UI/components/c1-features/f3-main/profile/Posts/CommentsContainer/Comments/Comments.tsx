import React, {useState} from 'react';
import s from './Comments.module.css'
import faceIcon from '../../../../../../../../s4-common/assets/pictures/Face.png'
import deleteIcon from '../../../../../../../../s4-common/assets/pictures/delete.svg'

type PropsType = {
    comments: Array<{ userName: string, comment: string, commentId: number }> | []
    visibleComments: boolean
    addNewPostTC: (comment: string, postId: number, userName: string) => void
    userName: string | null
    postId: number
    deleteCommentTC: (postId: number, commentId: number) => void
}

const Comments = ({comments, visibleComments, addNewPostTC, postId, userName, deleteCommentTC}: PropsType) => {

    const [inputValue, setInputValue] = useState<string>('')

    const finalClassName = visibleComments ? `${s.comments} ${s.commentsOpen}` : `${s.comments}`

    const onButtonClickHandler = () => {
        if (inputValue.length > 0) {
            addNewPostTC(inputValue, postId, userName ? userName : 'Anonymous')
            setInputValue('')
        }
    }


    return (
        <div className={finalClassName}>
            {comments.map((c) => {
                return (
                    <div key={c.commentId} className={s.comment}>
                        <div className={s.comment_userName}>{c.userName}
                            <img style={{width: '10px', height: '10px'}}
                                 src={faceIcon}/></div>
                        <img onClick={() => deleteCommentTC(postId, c.commentId)} className={s.deleteComment}
                             src={deleteIcon} style={{width: '11px', height: '13px'}}/>
                        <div className={s.comment_text}>{c.comment}</div>
                    </div>
                )
            })}
            <input value={inputValue} type={"text"} className={s.comments_input}
                   onChange={(e) => setInputValue(e.currentTarget.value)}/>
            <button disabled={inputValue.length === 0} type={'submit'} className={s.comments_button}
                    onClick={onButtonClickHandler}>Add comment
            </button>
        </div>
    )
};

export default Comments;