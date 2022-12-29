import React, {ChangeEvent} from 'react';
import s from "./Posts.module.css"
import {postsDataType} from "../../../../redux/state";


type PropsType = {
    addNewPost:(newPost:string)=> void
    onChangeHandler:(text:string)=> void
    newPost: string
    posts:postsDataType[]
}


const Posts = (props: PropsType) => {

        const addNewPost = () => {
            props.addNewPost(props.newPost)
        }

        const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
            let text = e.currentTarget.value
            props.onChangeHandler(text)
        }

        return (
            <div className={s.posts}>
                <div className={s.addInfoInput}>
                    <input placeholder='Share your news'
                           value={props.newPost}
                           onChange={onChangeHandler}
                           />
                    <button onClick={addNewPost}> Add posts</button>
                </div>
                <div className={s.post}>
                    {props.posts.map((p) => {
                        return <div key={p.id}>
                            <div className={s.postText}>{p.post}</div>
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
;

export default Posts;