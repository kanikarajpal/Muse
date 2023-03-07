import "./MusicPlayerStyle.css";
import React, { useContext } from "react";
import MusicBar from "../../SubComponents/MusicBar/MusicBar";
import { ContentContext } from "../../../App";

export default function MusicPlayer() {
  const { playlist, index } = useContext(ContentContext);
  
  
  return (
    <div className="music-player-container">
      <p className="music-player-heading">Now Playing</p>
      <div className="music-player-image-container">
        
        <img
          className="music-player-image"
          src={playlist[index].image}
          alt={playlist[index].songName}
        />

      </div>
      <div className="music-player-sub-heading">
        <div className="song">{playlist[index].songName}</div>
        <div className="song-singer">{playlist[index].singer}</div>
      </div>
      <MusicBar />
    </div>
  );
}
