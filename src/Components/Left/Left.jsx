import "./LeftStyle.css";
import Menu from "./Menu/Menu";
import Button from "../../Components/SubComponents/Button/Button";
import Logo from "../../Media/icons/svg/logo.svg";
import { signOutUser } from "../utils/firebase/firebase";
import { ContentContext } from "../../App";
import { useContext } from "react";
import { signInWithGooglePopup } from "../utils/firebase/firebase";
import Icon from "../../Media/icons/svg/google.png";

export default function Left() {
  const menuCompList = [
    "Trending",
    "Playlist",
    "Favorites",
    "Albums",
    "Artists",
  ];

  const { currentUser } = useContext(ContentContext);

  const handleSignOut = async () => {
    await signOutUser();
  };

  const guidanceList = ["FAQ", "Help", "Privacy Policy"];

  const signInWithGoogle = async (e) => {
    e.preventDefault();
    await signInWithGooglePopup();
   
  };

  return (
    <div className="left-container">
      <img src={Logo} className="logo"  alt="logo"/>
      <div>
        <Menu title={"Menu"} compList={menuCompList} />
        <Menu title={"Guidance"} compList={guidanceList} />
      </div>
      <div className="btn-container">
      <Button
        cls="premium-btn"
        onClick={(e) => {
          currentUser ? handleSignOut() : signInWithGoogle(e);
        }}
      >
        {currentUser ? (
          <p className="login-btn">Sign Out </p>
        ) : (
          <div className="login-btn">
            <p>Sign in with </p> <img src={Icon} className="google-icon" alt = 'google-icon'></img>
          </div>
        )}
      </Button></div>
    </div>
  );
}
