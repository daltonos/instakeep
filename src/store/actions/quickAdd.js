//import axios from "../../axios-orders";
import * as actionTypes from './actionTypes';

export const initLoadingPosts = () => {
    return {
        type: actionTypes.LOAD_POSTS_START
    };
}