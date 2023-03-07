import { Avatar } from "@mui/material";

import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import "./TrendStyle.css";
import { ContentContext } from "../../../App";
import { useContext } from "react";
import PlayCircle from "../PlayCircle/PlayCircle";

export default function Trend({ ind }) {
  const { playlist} =
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
        <PlayCircle color = "white" index={ind}/>
        <FavoriteBorderIcon />
      </div>
    </div>
  );
}
