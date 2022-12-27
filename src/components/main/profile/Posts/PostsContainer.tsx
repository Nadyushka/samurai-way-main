import React, {ChangeEvent} from 'react';
import s from "./Posts.module.css"
import {    dispatchTypes, profilePagesType} from "../../../../redux/state";
import {addNewPostActionCreator, changeNewPostPostActionCreator} from "../../../../redux/profile-pages-reducer";
import Posts from "./Posts";
import StoreContext from "../../../../StoreContext";

type PropsType = {
    posts: profilePagesType
    newPost: string
    dispatch: (action: dispatchTypes)=> void
}


const PostsContainer = (props: PropsType) => {


        return (
            <StoreContext.Consumer>
                {
                (store) => {

                    let state = store.profilePages

                    const addNewPost = () => {
                        let action = addNewPostActionCreator(props.newPost)
                        props.dispatch(action)
                    }

                    const onChangeHandler = (text:string) => {
                        let action = changeNewPostPostActionCreator(text)
                        props.dispatch(action)
                    }

                    return <Posts addNewPost={addNewPost}
                           onChangeHandler={onChangeHandler}
                           newPost={state.newPost}
                           posts={state}
                    />
                }
                }
            </StoreContext.Consumer>
        )
    }
;

export default PostsContainer;