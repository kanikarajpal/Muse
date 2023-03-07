import React from "react";
import PlayCircleIcon from "@mui/icons-material/PlayCircle";
import { ContentContext } from "../../../App";
import { useContext } from "react";

export default function PlayCircle({ color, index, fontSize }) {
    const { setIndex, setIsPlaying } = useContext(ContentContext);
   
  return (
    <PlayCircleIcon
      className={`playCircle ${color}`}
      fontSize={fontSize}
      onClick={() => {
        setIndex(index);
        setIsPlaying(true);
      }}
    />
  );
}
