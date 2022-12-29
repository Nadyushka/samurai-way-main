import React from 'react';
import {addNewPostActionCreator, changeNewPostPostActionCreator, postsDataType} from "../../../../redux/profile-pages-reducer";
import Posts from "./Posts";
import {connect} from "react-redux";
import {AppStateType} from "../../../../redux/redux-store";
import {Dispatch} from "redux";




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


export type mapStateToProps = {
    posts: postsDataType[]
    newPost: string
}

export type mapDispatchToPropsType = {
    addNewPost: (newPost: string) => void
    onChangeHandler:(text: string) => void
}

export type PostsPropsType = mapStateToProps & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType):mapStateToProps => {
    return {
        posts: state.profilePages.posts,
        newPost: state.profilePages.newPost,
    }
}


const mapDispatchToProps = (dispatch:Dispatch ):mapDispatchToPropsType => {
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