
import PlayCircle from "../PlayCircle/PlayCircle";
import "./Playcard.css";

export default function Playcard({ ind, item }) {
  const { image, songName, singer} = item;
  
  return (
    <div className="playcard-div">
      <img src={image} className="img-div" alt="songName" />
      <div className="song-div">
        <div className= "name-div">
        <div className="song">{songName}</div>
        <div className="singer">{singer}</div>
        </div>
        <PlayCircle color="orange" index={ind} fontSize="large"/>
      </div>
    </div>
  );
}
