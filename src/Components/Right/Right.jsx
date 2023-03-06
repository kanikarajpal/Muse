import MusicPlayer from "./MusicPlayer/MusicPlayer";
import Navbar from "./Navbar/Navbar";
import Playroom from "./PlayRoom/Playroom";
import "./RightStyle.css";

export default function Right() {
  return (
    <div className="right-container">
      <Navbar />
      <Playroom />
      <MusicPlayer />
    </div>
  );
}
