import React, {useEffect, useState} from 'react';
import s from "./Posts.module.css"
import {PostsPropsType} from "./PostsContainer";
import {getPosts, postsDataType} from '../../../../../../s2-BLL/profile-pages-reducer';
import {useDispatch} from "react-redux";
import {CommentsContainer} from "./CommentsContainer/CommentsContainer";


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
                    comments: [{userName: 'Boby', comment: 'Good for you))', commentId: 1}, {
                        userName: 'Lily',
                        comment: 'Cool',
                        commentId: 2
                    }]
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
            <div className={s.postsBlock}>
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
                </div>

                <div className={s.post}>
                    {props.posts.map((posts) => {
                        return <CommentsContainer postsData={posts}
                                                  deletePostHandler={deletePostHandler}
                                                  onClickToggleHandler={onClickToggleHandler}
                                                  addNewPostTC={props.addNewPostTC}
                                                  userName={props.userName}
                                                  key={posts.id}
                                                  deleteCommentTC={props.deleteCommentTC}
                        />
                    })}
                </div>
            </div>

        )
    } else {
        return <></>
    }
}

export default Posts;






