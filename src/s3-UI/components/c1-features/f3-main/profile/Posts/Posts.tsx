import React, {useEffect, useState} from 'react';
import s from "./Posts.module.css"
import {PostsPropsType} from "./PostsContainer";
import deleteIcon from '../../../../../../s4-common/assets/pictures/delete.svg'
import {getPosts, postsDataType} from '../../../../../../s2-BLL/profile-pages-reducer';
import {useDispatch} from "react-redux";
import likeNo from '../../../../../../s4-common/assets/pictures/likeNo.png'
import likeYes from '../../../../../../s4-common/assets/pictures/likeYes.png'
import Comments from './Comments/Comments';


export const Posts = (props: PostsPropsType) => {

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
            let defaultValue: postsDataType[] = [
                {id: 1, post: 'Hello, everyone', likesCount: 10, myLike: false, commentsCount: 0, comments: []},
                {
                    id: 2,
                    post: 'I am happy',
                    likesCount: 13,
                    myLike: true,
                    commentsCount: 2,
                    comments: [{userName: 'Boby', comment: 'Good for you))'}, {userName: 'Lily', comment: 'Cool'}]
                }
            ]
            localStorage.setItem('postsLocalStorage', JSON.stringify(defaultValue))
            dispatch(getPosts(defaultValue))
        }
    }, [])

    const deletePostHandler = (postId: number) => {
        props.deletePostTC(postId)
    }

    const onClickToggleHandler = (postId: number, likeMyPostValue: boolean) => props.likeMyPostTC(postId, likeMyPostValue)

    if (props.isOwner) {
        return (
            <div className={s.posts}>
                <input className={s.postsInput} value={inputValue} placeholder={'Share your thoughts'}
                       onChange={(e) => {
                           setInputValue(e.currentTarget.value)
                           setError('')
                       }}/>
                <button className={s.posts_button} disabled={error.length > 0}
                        onClick={() => addNewPost(inputValue)}>Submit
                </button>
                <div className={error ? `${s.errorInfo} ${s.errorInfo_active}` : `${s.errorInfo} `}>{error}</div>


                <div className={s.post}>
                    {props.posts.map((p) => {
                        return <CommentsContainer p={p}
                                                  deletePostHandler={deletePostHandler}
                                                  onClickToggleHandler={onClickToggleHandler}/>
                    })}
                </div>
            </div>

        )
    } else {
        return <></>
    }
}


export default Posts;


type CommentsContainerProps = {
    p: postsDataType
    onClickToggleHandler: (postId: number, likeMyPostValue: boolean) => void
    deletePostHandler: (postId: number) => void
}

const CommentsContainer = ({p, onClickToggleHandler, deletePostHandler}: CommentsContainerProps) => {

    const [visibleComments, setVisibleComments] = useState<boolean>(false)

    return <div className={s.postItem} key={p.id}>
        <div className={s.postText}>
            <span>{p.post}</span>
            <img src={deleteIcon}
                 onClick={() => deletePostHandler(p.id)}/>
        </div>
        <div className={s.postReaction}>
            <div className={s.postLikes}><img
                onClick={() => onClickToggleHandler(p.id, !p.myLike)}
                style={{width: '10px', height: '10px'}}
                src={p.myLike ? likeYes : likeNo}/> {p.likesCount}</div>
            <div className={s.postComments} onClick={() => {
                setVisibleComments(!visibleComments)
            }}>Comments: {p.commentsCount}</div>
            {visibleComments && <Comments comments={p.comments}/>}
        </div>
    </div>

}



