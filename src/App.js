import "./App.css";
import React, { useState } from "react";
import Left from "./Components/Left/Left";
import Right from "../src/Components/Right/Right";
import Middle from "../src/Components/Middle/Middle";

import { createContext } from "react";
export const ContentContext = createContext();
const playlist = [
  {
    id: 1,
    songName: "Mera Dil Ye Pukare",
    singer: "	Lata Mangeshkar",
    image: "/images/1.jpg",
    sound: "/music/1.mp3",
  },
  {
    id: 2,
    songName: "Maan Meri Jaan",
    singer: "King",
    image: "/images/2.jpg",
    sound: "/music/2.mp3",
  },
  {
    id: 3,
    songName: "Tu Hi Siya Ka ram",
    singer: "Arijit Singh",
    image: "/images/3.jpg",
    sound: "/music/3.mp3",
  },
  {
    id: 4,
    songName: "Brown Munde",
    singer: "AP Dhillon",
    image: "/images/4.jpg",
    sound: "/music/4.mp3",
  },
  {
    id: 5,
    songName: "Tu Mera Koi Na Hoke",
    singer: "Arijit Singh & Sachin",
    image: "/images/5.jpg",
    sound: "/music/5.mp3",
  },
  {
    id: 6,
    songName: "Excuses",
    singer: "	Ap Dhillon",
    image: "/images/6.jpg",
    sound: "/music/6.mp3",
  },
  {
    id: 7,
    songName: "Tum Aankhon Se Batana",
    singer: "	Dikshant",
    image: "/images/7.jpg",
    sound: "/music/7.mp3",
  },
  {
    id: 8,
    songName: "Tu Aake Dekhle",
    singer: "Satyam HCR",
    image: "/images/8.jpg",
    sound: "/music/8.mp3",
  },
  {
    id: 9,
    songName: "Dheere Dheere Se Meri",
    singer: "Swapneel Jaiswal",
    image: "/images/9.jpg",
    sound: "/music/9.mp3",
  },
  {
    id: 10,
    songName: "Unstoppable",
    singer: "	Sia",
    image: "/images/10.jpg",
    sound: "/music/10.mp3",
  },
  {
    id: 11,
    songName: "Itna Na Karo Tum Yaad",
    singer: "B Praak",
    image: "/images/11.jpg",
    sound: "/music/11.mp3",
  },
  {
    id: 12,
    songName: "Zindagi Tere Naal",
    singer: "Pav Dharia",
    image: "/images/12.jpg",
    sound: "/music/12.mp3",
  },
  {
    id: 13,
    songName: "Har Har Shambhu Shiv Mahadeva",
    singer: "	Jeetu Sharma",
    image: "/images/13.jpg",
    sound: "/music/13.mp3",
  },
  {
    id: 14,
    songName: "Raatan Lambiyan",
    singer: "	Jubin Nautiyal, Asees Kaur",
    image: "/images/14.jpg",
    sound: "/music/14.mp3",
  },
  {
    id: 15,
    songName: "Tum Hi Ho",
    singer: "	Arijit Singh",
    image: "/images/15.jpg",
    sound: "/music/15.mp3",
  },
];
const App = () => {
 
  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  const currentSong = playlist[index];

  return (
    <ContentContext.Provider value={{ playlist, index, setIndex, currentSong, isPlaying, setIsPlaying }}>
      <div className="App">
        <Left />
        <Middle />
        <Right />
      </div>
    </ContentContext.Provider>
  );
};

export default App;