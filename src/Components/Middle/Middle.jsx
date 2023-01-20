import "./MiddleStyle.css";
import Quorus from "./Quorus/Quorus";
import Trending from "../SubComponents/Trending/Trending";

export default function Middle() {
  return (
    <div className='middle-container'>
      <input placeholder='  Search song here....'
        type="search"
        className="search-option"></input>
      <Quorus />
      <Trending title = 'Trending Songs'/>
    </div>
  )
}
