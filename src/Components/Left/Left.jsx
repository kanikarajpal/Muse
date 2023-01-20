import "./LeftStyle.css";
import Menu from "./Menu/Menu";
import Button from "../../Components/SubComponents/Button/Button";
import  Logo  from "../../Media/icons/svg/logo.svg";

export default function Left() {
  const menuCompList = [
    "Trending",
    "Playlist",
    "Favorites",
    "Albums",
    "Artists",
  ];
  const guidanceList = ["FAQ", "Help", "Privacy Policy"];
  return (
    <div className="left-container">
      <img src={Logo} className='logo'/>
      <div>
        
        <Menu title={"MENU"} compList={menuCompList} />
        <Menu title={"GUIDANCE"} compList={guidanceList} />
      </div>
      <Button cls= 'premium-btn'>Get Premium</Button>
    </div>
  );
}
