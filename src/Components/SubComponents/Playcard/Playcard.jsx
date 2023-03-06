import { useContext } from "react";
import { ContentContext } from "../../../App";
import "./Playcard.css";

export default function Playcard({ index, item }) {
  const { image, songName, singer, sound } = item;

  return (
    <div className="playcard-div">
      <img src={image} className="img-div" alt="songName" />
      <div className="song-div">
        <div className="song">{songName}</div>
        <div className="singer">{singer}</div>
      </div>
    </div>
  );
}
