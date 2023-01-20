import React, { useState, useEffect, useRef, useContext } from "react";
import { styled, Typography, Slider, Paper, Stack, Box } from "@mui/material";

import PauseIcon from "@mui/icons-material/Pause";
import FastRewindIcon from "@mui/icons-material/FastRewind";
import FastForwardIcon from "@mui/icons-material/FastForward";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import { ContentContext } from "../../../App";

const Div = styled("div")(({ theme }) => ({
  backgroundColor: "",
  height: "100%",
  width: "100%",
  objectFit: "contain",
  paddingTop: theme.spacing(4),
}));

const CustomPaper = styled(Paper)(({ theme }) => ({
  backgroundColor: "#fe6d1c",
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(1),
  padding: theme.spacing(1),
}));

const PSlider = styled(Slider)(({ theme, ...props }) => ({
  color: "white",
  height: 2,
  "&:hover": {
    cursor: "auto",
  },
  "& .MuiSlider-thumb": {
    width: "13px",
    height: "13px",
    display: props.thumbless ? "none" : "block",
  },
}));

export default function MusicBar() {
  const audioPlayer = useRef();
  const { playlist, index, setIndex, isPlaying, setIsPlaying } =
    useContext(ContentContext);

  const [currentSong] = useState(playlist[index]);

  const [elapsed, setElapsed] = useState(0);
  const [duration, setDuration] = useState(0);

  useEffect(() => {
    if (isPlaying) {
      setInterval(() => {
        const _duration = Math.floor(audioPlayer?.current?.duration);
        const _elapsed = Math.floor(audioPlayer?.current?.currentTime);

        setDuration(_duration);
        setElapsed(_elapsed);
      }, 100);
    }

    togglePlay();
  }, [isPlaying, index]);

  function formatTime(time) {
    if (time && !isNaN(time)) {
      const minutes =
        Math.floor(time / 60) < 10
          ? `0${Math.floor(time / 60)}`
          : Math.floor(time / 60);
      const seconds =
        Math.floor(time % 60) < 10
          ? `0${Math.floor(time % 60)}`
          : Math.floor(time % 60);

      return `${minutes}:${seconds}`;
    }
    return "00:00";
  }

  const togglePlay = () => {
 
    audioPlayer.current.src = playlist[index].sound;

    if (!isPlaying) {
      audioPlayer.current.pause();
    } else {
      audioPlayer.current.play();
    }

  };

  const toggleForward = () => {
    audioPlayer.current.currentTime += 10;
  };

  const toggleBackward = () => {
    audioPlayer.current.currentTime -= 10;
  };

  const toggleSkipForward = () => {
    if (index >= playlist.length - 1) {
      setIndex(0);
      audioPlayer.current.src = playlist[0].sound;
      audioPlayer.current.play();
    } else {
      setIndex((prev) => prev + 1);
      audioPlayer.current.src = playlist[index + 1].sound;
      audioPlayer.current.play();
    }
    if (!isPlaying) setIsPlaying((prev) => prev + 1);
  };

  const toggleSkipBackward = () => {
    if (index > 0) {
      setIndex((prev) => prev - 1);
      audioPlayer.current.src = playlist[index - 1].sound;
      audioPlayer.current.play();
    } else {
      setIndex(playlist.length - 1);
      audioPlayer.current.src = playlist[playlist.length - 1].sound;
      audioPlayer.current.play();
    }
    setIsPlaying((prev) => prev + 1);
  };

  return (
    <Div>
      <audio src={currentSong} ref={audioPlayer} />
      <CustomPaper>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Stack
            direction="row"
            spacing={1}
            sx={{
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <SkipPreviousIcon
              sx={{
                color: "white",
                "&:hover": { color: "white" },
              }}
              onClick={toggleSkipBackward}
            />
            <FastRewindIcon
              sx={{ color: "white", "&:hover": { color: "white" } }}
              onClick={toggleBackward}
            />

            {!isPlaying ? (
              <PlayArrowIcon
                fontSize={"large"}
                sx={{ color: "white", "&:hover": { color: "white" } }}
                onClick={() => {
                
                  setIsPlaying(true);
                }}
              />
            ) : (
              <PauseIcon
                fontSize={"large"}
                sx={{ color: "white", "&:hover": { color: "white" } }}
                onClick={() => {
        
                  setIsPlaying(false);
                }}
              />
            )}

            <FastForwardIcon
              sx={{ color: "white", "&:hover": { color: "white" } }}
              onClick={toggleForward}
            />
            <SkipNextIcon
              sx={{ color: "white", "&:hover": { color: "white" } }}
              onClick={toggleSkipForward}
            />
          </Stack>

          <Stack
            sx={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          />
        </Box>
        <Stack
          spacing={1}
          direction="row"
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <Typography sx={{ color: "white" }}>{formatTime(elapsed)}</Typography>
          <PSlider thumbless="true" value={elapsed} max={duration} />
          <Typography sx={{ color: "white" }}>
            {formatTime(duration - elapsed)}
          </Typography>
        </Stack>
      </CustomPaper>
    </Div>
  );
}
