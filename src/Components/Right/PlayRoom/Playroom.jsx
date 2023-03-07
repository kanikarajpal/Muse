import "./PlayroomStyle.css";
import React, { useState, useEffect } from "react";
import { checkPlayroom } from "../../utils/firebase/firebase";
import Button from "../../SubComponents/Button/Button";
import CloseIcon from "@mui/icons-material/Close";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { Alert } from "@mui/material";
import { useContext } from "react";
import { ContentContext } from "../../../App";
import { joinUser, createUser } from "../../utils/firebase/firebase";



export default function Playroom() {
  const { photo, userName, userEmail,currentUser } =
    useContext(ContentContext);

  const [createOpen, setCreateOpen] = useState(false);
  const [joinOpen, setJoinOpen] = useState(false);
  //const [localPlayroomData, setLocalPlayroomData] = useState({});
  const [notification, setNotification] = useState({
    isNotif: false,
    notif: "",
    type: "",
  });

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#26272a",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
  


  
  useEffect(() => {
   
    if (notification.isNotif)
      setTimeout(() => {
        setNotification({
          isNotif: false,
          notif: "",
          type: "",
        });
      }, 1500);
  }, [notification]);
  

  const CustomModal = ({ setState, state }) => {
    const [playRoomName, setPlayRoomName] = useState("");
    const newUser = { userName, userEmail, photo };

    const submitCreateHandle = () => {
      if (currentUser) {
      
        if (playRoomName) {
          checkPlayroom(playRoomName, "create").then((resp) => {
            if (resp) {
              setNotification({
                isNotif: true,
                notif: "Congratulations ! Your Playroom is Created.",
                type: "success",
              });
              createUser(playRoomName, newUser);
              setState(false);
            } else {
              setNotification({
                isNotif: true,
                notif:
                  "Playroom already exists! Enter a different Playroom name.",
                type: "failure",
              });
            }
          });
        } else {
          setNotification({
            isNotif: true,
            notif: "Enter a valid Playroom name!",
            type: "failure",
          });
        }
      }
      else {
        
      }
    };
    const submitJoinHandle = () => {
      if (playRoomName) {
        checkPlayroom(playRoomName, "join").then((resp) => {
          
          if (resp) {
            // resp.forEach((doc) => {
            //   setLocalPlayroomData(doc.data());
              
             
            // });

            joinUser(resp, playRoomName, newUser).then((val) => {
              
              setNotification({
                isNotif: true,
                notif: val
                  ? "Playroom already joined!"
                  : "Congratulations ! You have joined the playroom.",
                type: val ? "failure" : "success",
              });
            });

            setState(false);
          } else {
            setNotification({
              isNotif: true,
              notif: "Playroom does not exist! Enter a valid Playroom name.",
              type: "failure",
            });
          }
        });
      } else {
        setNotification({
          isNotif: true,
          notif: "Enter a valid Playroom name!",
          type: "failure",
        });
      }
    };
    return (
      <Modal
        open={state}
        onClose={() => {
          setState(false);
        }}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        className="modal"
      >
        <Box sx={style} className="modal-box">
          <CloseIcon
            className="close-btn"
            onClick={() => {
              setState(false);
            }}
          />

          <h2>Enter Playroom Name</h2>

          <div className="search-bar">
            <input
              placeholder="Playroom name"
              className="search-option"
              onChange={(event) => {
                setPlayRoomName(event.target.value);
              }}
              value={playRoomName}
              type="text"
            ></input>

            <Button
              onClick={() => {
                if (createOpen ) submitCreateHandle();
                if (joinOpen) submitJoinHandle();
              }}
            >
              Done
            </Button>
          </div>
        </Box>
      </Modal>
    );
  };

  const JoinCreate = () => {
    return (
      <div className="join-create-div">
        <Button
          cls="button-div"
          onClick={() => {
            if(currentUser)
              setCreateOpen(true);
            else {
              setNotification({
              isNotif: true,
              notif: "Login first in order to create a playroom",
              type: "failure",
            });
            }
          }}
        >
          <p>Create Playroom</p>
        </Button>

        <Button
          cls="button-div"
          onClick={() => {
            if(currentUser)
              setJoinOpen(true);
            else {
              setNotification({
              isNotif: true,
              notif: "Sign in first in order to create a playroom",
              type: "failure",
            });
            }
          }}
        >
          Join Playroom
        </Button>
      </div>
    );
  };

  return (
    <div className="playroom-container">
      {notification.isNotif && (
        <div className="notif">
          {notification.type === "success" ? (
            <Alert severity="success" color="info">
              {notification.notif}
            </Alert>
          ) : (
            <Alert severity="error">{notification.notif}</Alert>
          )}
        </div>
      )}
      <div className="playRoom-div">
        <p className="playroom-heading">Playroom</p>

        <JoinCreate />
        <p className="playroom-heading-2">It seems that you have no active playroom right now, click on Create/Join Playroom button to get started!</p>
        <CustomModal setState={setCreateOpen} state={createOpen} />
        <CustomModal setState={setJoinOpen} state={joinOpen} />
      </div>
    </div>
  );
}
