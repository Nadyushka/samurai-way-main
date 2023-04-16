import React, {useState} from 'react';
import s from "./Posts.module.css"
import {PostsPropsType} from "./PostsContainer";
import deleteIcon from '../../../../../../s4-common/assets/pictures/delete.svg'


const Posts = (props: PostsPropsType) => {

    const [inputValue, setInputValue] = useState<string>('')
    const [error, setError] = useState<string>('')

    const addNewPost = (value: string) => {
        if (value.length > 0) {
            props.addNewPostActionCreator(inputValue)
            setInputValue('')
        } else {
            setError('Min length is 1 symbol')
            setTimeout(() => {
                setError('')
            }, 2000)
        }
    }

    return (
        <div className={s.posts}>

            <input className={s.postsInput} value={inputValue} onChange={(e) => {
                setInputValue(e.currentTarget.value)
                setError('')
            }}/>
            <button  disabled={error.length > 0} onClick={() => addNewPost(inputValue)}>Submit</button>
            <div className={error ? `${s.errorInfo} ${s.errorInfo_active}` : `${s.errorInfo} `}>{error}</div>

            <div className={s.post}>
                {props.posts.map((p) => {
                    return <div className={s.postItem} key={p.id}>
                        <div className={s.postText}>
                            <span>{p.post}</span>
                            <img src={deleteIcon}/>
                        </div>
                        <div className={s.postReaction}>
                            <div className={s.postLikes}>likes: {p.likesCount}</div>
                            <span className={s.postComments}>Comments: {p.commentsCount}</span>
                        </div>
                    </div>
                })}
            </div>
        </div>
    )
}


export default Posts;





