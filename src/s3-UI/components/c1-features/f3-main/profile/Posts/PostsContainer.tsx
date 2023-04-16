import React from 'react';
import {addNewPostActionCreator, postsDataType} from "../../../../../../s2-BLL/profile-pages-reducer";
import Posts from "./Posts";
import {connect} from "react-redux";
import {AppStateType} from "../../../../../../s2-BLL/redux-store";
import {Dispatch} from "redux";


export type mapStateToProps = {
    posts: postsDataType[]
}

export type mapDispatchToPropsType = {
    addNewPostActionCreator: (newPost: string) => void
}

export type PostsPropsType = mapStateToProps & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToProps => {
    return {
        posts: state.profilePages.posts,
    }
}

// const mapDispatchToProps = (dispatch: Dispatch): mapDispatchToPropsType => {
//     return {
//         addNewPost: (newPost: string) => {
//             dispatch(addNewPostActionCreator(newPost))
//         }
//     }
// }

const PostsContainer = connect(mapStateToProps, {addNewPostActionCreator})(Posts)

export default PostsContainer;