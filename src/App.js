import React, {useEffect} from "react";
import { hot } from "react-hot-loader";
import AlbumList from "./album/AlbumList";
import "./App.css";
import {useDispatch, useSelector} from "react-redux";
import {fetchAlbums} from "./store/actions";

const App = () =>{
    let dispatch = useDispatch();

// get data from the Redux store
    let fetchData = useSelector((state) => {
        return state.data;
    });

    useEffect(()=>{
        getalbumsData()
    },[]);

    let getalbumsData= () =>{
        // dispatch the action
        dispatch(fetchAlbums());
    };

    return(
        <div className="albums-app">
            <h1>React Interview Challenge</h1>
            {
                // condition checking for data is there aor empty
                (fetchData.albums.length > 0 )? <React.Fragment>
                    <AlbumList albums ={fetchData.albums}  />
                </React.Fragment>
                    : null
            }
        </div>
    );

}

export default hot(module)(App);
