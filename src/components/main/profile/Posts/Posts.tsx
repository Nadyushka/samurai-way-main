import React, {ChangeEvent} from 'react';
import s from "./Posts.module.css"
import {    dispatchTypes, profilePagesType} from "../../../../redux/state";
import {addNewPostActionCreator, changeNewPostPostActionCreator} from "../../../../redux/profile-pages-reducer";

type PropsType = {
    addNewPost:()=> void
    onChangeHandler:(text:string)=> void
    newPost: string
    posts:profilePagesType
}


const Posts = (props: PropsType) => {

        const addNewPost = () => {
            props.addNewPost()
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
                    {props.posts.posts.map((p) => {
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