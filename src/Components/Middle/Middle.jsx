import "./MiddleStyle.css";
import Quorus from "./Quorus/Quorus";
import Trending from "../SubComponents/Trending/Trending";
import { ContentContext } from "../../App";
import { useContext } from "react";
import SearchIcon from "@mui/icons-material/Search";
import { useState } from "react";
import { playlist } from "../../../src/data";

export default function Middle() {
  const {  userName } = useContext(ContentContext);
  let var1 = userName.split(" ");

  const [searchElement, setSearchElement] = useState(playlist);
  const onSearch = (e) => {
    let searchSong = e.target.value.toLocaleLowerCase();
    let temp = playlist.filter((n) =>
      n.songName.toLocaleLowerCase().includes(searchSong)
    );
    setSearchElement(temp);
  };
  return (
    <div className="middle-container">
      <div className="search-area">
        <input
          placeholder="Search Song here....."
          type="search"
          className="search-option"
          onChange={(e) => {
            onSearch(e);
          }}
        ></input>
        <SearchIcon />
        <p className="userName"> Hola {var1[0]}!</p>
      </div>
      <Quorus quorusElement={searchElement} />
      <Trending title="Trending Songs" />
    </div>
  );
}
