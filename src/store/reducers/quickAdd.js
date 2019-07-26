import * as actionTypes from '../actions/actionTypes';
//import { updateObject } from '../utility';


const initialState = {
    posts: []
};

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.LOAD_POSTS_START:
            return {
                ...state,
                posts: [1]
            }
        default: return state;
    }
};

export default reducer;