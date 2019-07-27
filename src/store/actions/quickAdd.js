import axios from "../../axios-posts";
import * as actionTypes from './actionTypes';

export const setPostsSuccess = (posts) => {
    return {
        type: actionTypes.LOAD_POSTS_SUCCESS,
        posts: posts
    };
}

export const setPostsFailed = () => {
    return {
        type: actionTypes.LOAD_POSTS_FAIL
    };
}

export const initLoadingPosts = () => {
    return dispatch => {
        axios.get("posts.json").then(
            res => {
                console.log({res});
                const postsToSet = res.data && res.data.length ? res.data : [];
                console.log(postsToSet);
                dispatch(setPostsSuccess(postsToSet));
            }
        ).catch(
            err => {
                dispatch(setPostsFailed());
                console.error(err);
            }
        );
    }
}