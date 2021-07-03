import React from "react";
import AlbumItem from "./AlbumItem";
import "./AlbumList.css";

const AlbumList = ({ albums }) =>{
    // filtering the e letters
    const newAlbums = albums.filter(({title})=>{
      return   title.charCodeAt(0) !== 69 &&  title.charCodeAt(0) !== 101
    });
    return(
        <ul className="album-list">
            {
                newAlbums.map(album => (
                    <AlbumItem key={album.id} album={album} />
                ))}
        </ul>
    );

}

export default AlbumList;
