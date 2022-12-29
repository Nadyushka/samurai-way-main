import React from 'react';
import {dispatchTypes, profilePagesType} from "../../../../redux/state";
import {addNewPostActionCreator, changeNewPostPostActionCreator} from "../../../../redux/profile-pages-reducer";
import Posts from "./Posts";
import {connect} from "react-redux";

type PropsType = {
    posts: profilePagesType
    newPost: string
    dispatch: (action: dispatchTypes) => void
}


// const PostsContainer1 = (props: PropsType) => {
//         return (
//             <StoreContext.Consumer>
//                 {
//                 (store) => {
//
//                     let state = store.profilePages
//
//                     const addNewPost = (newPost:string) => {
//                         let action = addNewPostActionCreator(newPost)
//                         props.dispatch(action)
//                     }
//
//                     const onChangeHandler = (text:string) => {
//                         let action = changeNewPostPostActionCreator(text)
//                         props.dispatch(action)
//                     }
//
//                     return <Posts addNewPost={addNewPost}
//                            onChangeHandler={onChangeHandler}
//                            newPost={state.newPost}
//                            posts={state}
//                     />
//                 }
//                 }
//             </StoreContext.Consumer>
//         )
//     }

const mapStateToProps = (state: any) => {
    return {
        posts: state.profilePages.posts,
        newPost: state.profilePages.newPost
    }
}

const mapDispatchToProps = (dispatch: any) => {
    return {
        addNewPost: (newPost: string) => {
            dispatch(addNewPostActionCreator(newPost))
        },
        onChangeHandler: (text: string) => {
            dispatch(changeNewPostPostActionCreator(text))
        }
    }
}

const PostsContainer = connect(mapStateToProps, mapDispatchToProps)(Posts)

export default PostsContainer;