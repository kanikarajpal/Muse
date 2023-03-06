
import "./NavbarStyle.css";
import { useContext } from "react";
import { ContentContext } from "../../../App";
import { Avatar } from "@mui/material";
import NotificationsActiveSharpIcon from '@mui/icons-material/NotificationsActiveSharp';
export default function Navbar() {

    const { currentUser,photo, userName, userEmail } = useContext(ContentContext);
  
  return (
    <div className="Login-section">
      <NotificationsActiveSharpIcon sx={{ "&:hover": { color: "#d9683b" } }} />
      <div className="container-div">
      
      <div className="name-div">
        <p className="name">{userName?userName:'No User' }</p>
          <p className="email">{userEmail ? userEmail :'Login to continue'}</p>
        </div>
        <Avatar className="avatar-div" alt={userName || "AN"} src={photo} />
      </div>
      
    </div>
  )
}
