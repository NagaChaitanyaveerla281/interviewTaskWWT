import {
    FETCH_ALBUM_FAILURE,
    FETCH_ALBUM_REQUEST,
    FETCH_ALBUM_SUCCESS
} from "./actionTypes";
import Axios from "axios";


// fetch albums data from server
let fetchAlbums = () => {
    return (dispatch) => {
        dispatch({ type : FETCH_ALBUM_REQUEST });
        let dataURL = `https://jsonplaceholder.typicode.com/photos`;
        Axios.get(dataURL).then((response) => {
            dispatch({ type : FETCH_ALBUM_SUCCESS , payload : response.data});
        }).catch((error) => {
            dispatch({ type : FETCH_ALBUM_FAILURE , payload: error});
        });
    };
};

export {fetchAlbums};