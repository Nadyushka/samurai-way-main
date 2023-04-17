import React, {useEffect, useState} from 'react';
import s from "./Posts.module.css"
import {PostsPropsType} from "./PostsContainer";
import deleteIcon from '../../../../../../s4-common/assets/pictures/delete.svg'
import {getPosts, postsDataType} from '../../../../../../s2-BLL/profile-pages-reducer';
import {useDispatch} from "react-redux";


const Posts = (props: PostsPropsType) => {

    const [inputValue, setInputValue] = useState<string>('')
    const [error, setError] = useState<string>('')

    const dispatch = useDispatch()


    const addNewPost = (value: string) => {
        if (value.length > 0) {
            props.addPostTC(inputValue)
            setInputValue('')
        } else {
            setError('Min length is 1 symbol')
            setTimeout(() => {
                setError('')
            }, 2000)
        }
    }

    useEffect(() => {
        if (localStorage.getItem('firstOpen') === 'no') {
            dispatch(getPosts(JSON.parse(localStorage.getItem('postsLocalStorage')!)))
        } else {
            localStorage.setItem('firstOpen', 'no')
            let defaultValue = [
                {id: 1, post: 'Hello, everyone', likesCount: 10, commentsCount: 0},
                {id: 2, post: 'I am happy', likesCount: 13, commentsCount: 0}
            ]
            localStorage.setItem('postsLocalStorage', JSON.stringify(defaultValue))
            dispatch(getPosts(defaultValue))
        }
    }, [])

    const deletePostHandler = (postId: number) => {
       props.deletePostTC(postId)
    }

    return (
        <div className={s.posts}>

            <input className={s.postsInput} value={inputValue} placeholder={'Share your thoughts'}
                   onChange={(e) => {
                       setInputValue(e.currentTarget.value)
                       setError('')
                   }}/>
            <button disabled={error.length > 0} onClick={() => addNewPost(inputValue)}>Submit</button>
            <div className={error ? `${s.errorInfo} ${s.errorInfo_active}` : `${s.errorInfo} `}>{error}</div>

            <div className={s.post}>
                {props.posts.map((p) => {
                    return <div className={s.postItem} key={p.id}>
                        <div className={s.postText}>
                            <span>{p.post}</span>
                            <img src={deleteIcon} onClick={() => deletePostHandler(p.id)}/>
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





