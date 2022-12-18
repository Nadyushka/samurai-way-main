import React, {ChangeEvent} from 'react';
import s from "./Posts.module.css"
import {
    addNewPostActionCreator,
    changeNewPostPostActionCreator,
    dispatchTypes,
    profilePagesType
} from "../../../../redux/state";
import {stringify} from "uuid/index";

type PropsType = {
    posts: profilePagesType
    newPost: string
  //  addPost: (newPost: string) => void
  //  changeNewPost: (newPost: string) => void
    dispatch: (action: dispatchTypes)=> void
}



const Posts = (props: PropsType) => {

        const addNewPost = () => {
  //          props.addPost(props.newPost)
            let action = addNewPostActionCreator(props.newPost)
            props.dispatch(action)
        }

        const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
            let action = changeNewPostPostActionCreator(e.currentTarget.value)
            props.dispatch(action)
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