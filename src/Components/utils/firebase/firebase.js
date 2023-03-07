// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  doc,
  setDoc,
  getDocs,
  updateDoc,
  collection,
  getFirestore,
} from "firebase/firestore";

import {
  GoogleAuthProvider,
  getAuth,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDPQpMZNuxNZb0gp3MPe4vVvqFo2LcaJzw",
  authDomain: "muse-2d662.firebaseapp.com",
  projectId: "muse-2d662",
  storageBucket: "muse-2d662.appspot.com",
  messagingSenderId: "617806441919",
  appId: "1:617806441919:web:ffe7d3993365f87fb9c50a",
  measurementId: "G-079CF7HQTL",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account",
});

export const db = getFirestore(app);

export const checkPlayroom = async (playRoomName, str) => {
  const querySnapshot = await getDocs(collection(db, playRoomName));
 

  if (!querySnapshot.empty) {
    return str === "join" ? querySnapshot : 0;
  } else {
    return str === "join" ? 0: 1;
  }
};

export const createUser = async (playRoomName, user) => {
  const data = {
    name: playRoomName,
    userList: [user],
    songList: [],
  };

  const ref = doc(collection(db, playRoomName));
  await setDoc(ref, data);
};

export const joinUser = async (resp, playRoomName, newUser) => {
   let flag = 0;
  resp.forEach(async (item) => {
    const { userList, songList } = item.data();

   
    userList.forEach((user) => {
      if (user.userEmail === newUser.userEmail) {
        flag = 1;
      }
    });

    if (!flag) {
      const newUserList = [...userList, newUser];
      const data = {
        name: playRoomName,
        userList: newUserList,
        songList: songList,
      };

      const ref = doc(db, playRoomName, item.id);
      await updateDoc(ref, data);
      
    }
    
  });
  return flag;
};

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const checkUser = (callback) => onAuthStateChanged(auth, callback);

export const signOutUser = async () => await signOut(auth);


