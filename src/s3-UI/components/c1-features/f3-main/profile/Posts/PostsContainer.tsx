import React from 'react';
import {
    addNewPostActionCreator, addPostTC, deletePostTC, likeMyPostTC,
    postDeleteActionCreator,
    postsDataType
} from "../../../../../../s2-BLL/profile-pages-reducer";
import Posts from "./Posts";
import {connect} from "react-redux";
import {AppStateType} from "../../../../../../s2-BLL/redux-store";

type PropsType = {
    isOwner: boolean
}

export type mapStateToProps = {
    posts: postsDataType[]
    isOwner: boolean
}

export type mapDispatchToPropsType = {
    addPostTC: (newPost: string) => void
    deletePostTC: (postId: number) => void
    likeMyPostTC: (postId: number, likeMyPostValue: boolean) => void

}

export type PostsPropsType = mapStateToProps & mapDispatchToPropsType

const mapStateToProps = (state: AppStateType, ownProps:PropsType): mapStateToProps => {
    return {
        posts: state.profilePages.posts,
        isOwner: ownProps.isOwner
    }
}


const PostsContainer = connect(mapStateToProps, {addPostTC, deletePostTC, likeMyPostTC})(Posts)

export default PostsContainer;