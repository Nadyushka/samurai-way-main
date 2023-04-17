import React from 'react';
import {
    addNewPostActionCreator, addPostTC, deletePostTC,
    postDeleteActionCreator,
    postsDataType
} from "../../../../../../s2-BLL/profile-pages-reducer";
import Posts from "./Posts";
import {connect} from "react-redux";
import {AppStateType} from "../../../../../../s2-BLL/redux-store";


export type mapStateToProps = {
    posts: postsDataType[]
}

export type mapDispatchToPropsType = {
    addPostTC: (newPost: string) => void
    deletePostTC: (postId: number) => void
}

export type PostsPropsType = mapStateToProps & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType): mapStateToProps => {
    return {
        posts: state.profilePages.posts,
    }
}


const PostsContainer = connect(mapStateToProps, {addPostTC, deletePostTC})(Posts)

export default PostsContainer;