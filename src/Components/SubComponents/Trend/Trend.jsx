import { Avatar } from "@mui/material";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./TrendStyle.css";
import { ContentContext } from "../../../App";
import { useContext } from "react";

export default function Trend({ ind }) {
  const { playlist, setIndex, isPlaying, setIsPlaying } =
    useContext(ContentContext);
  return (
    <div className="trend-section">
      <div className="avatar-text">
        <Avatar className="avatar" alt="song1" src={playlist[ind].image} />

        <div className="text-section">
          <p className="text">{playlist[ind].songName}</p>
          <p className="singerName">{playlist[ind].singer}</p>
        </div>
      </div>
      <div className="iconSection">
        <PlayCircleIcon
          onClick={() => {
            setIndex(ind);
            setIsPlaying(true);
            
          }}
        />
        <FavoriteBorderIcon />
      </div>
    </div>
  );
}
