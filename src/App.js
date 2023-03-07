import "./App.css";
import { createContext } from "react";
import { useState, useEffect } from "react";
import Left from "./Components/Left/Left";
import Right from "../src/Components/Right/Right";
import Middle from "../src/Components/Middle/Middle";
import { checkUser } from "./Components/utils/firebase/firebase";
import { playlist } from "../src/data";


export const ContentContext = createContext();

const App = () => {
  const [currentUser, setCurrentUser] = useState();

  const [loading, setLoading] = useState(true);
  let userEmail = "";
  let userName = "";
  let photo = "";
  useEffect(() => {
    const unsubscribe = checkUser((user) => {
      setCurrentUser(user);
    
      setTimeout(() => {
        setLoading(false);
      }, 100);
    });

    return unsubscribe;
  }, []);
  if (currentUser) {
    userName = currentUser.displayName;
    userEmail = currentUser.email;
    photo = currentUser.photoURL;
  }

  const [index, setIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  // Make a user use state.

  const currentSong = playlist[index];

  return (
    <ContentContext.Provider
      value={{
        playlist,
        photo,
        currentUser,
        userName,
        userEmail,
        index,
        setIndex,
        currentSong,
        isPlaying,
        setIsPlaying,
      }}
    >
      <div className="App">
        <Left />
        <Middle />
        <Right />
      </div>
    </ContentContext.Provider>
  );
};

export default App;
