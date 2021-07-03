
import {
    FETCH_ALBUM_FAILURE,
    FETCH_ALBUM_REQUEST,
    FETCH_ALBUM_SUCCESS
} from "./actionTypes";

let initialState = {
    loading : false,
    albums : [],
    errorMessage : ''
};

let Reducer = (state=initialState , action) => {
    let {type , payload} = action;
    switch(type) {
        case FETCH_ALBUM_REQUEST:
            return {
                ...state,
                loading: true
            };
        case FETCH_ALBUM_SUCCESS:
            return {
                ...state,
                loading: false,
                albums: payload
            };
        case FETCH_ALBUM_FAILURE:
            return {
                ...state,
                loading: false,
                errorMessage : payload
            };
        default : return state;
    }
};
export {Reducer}