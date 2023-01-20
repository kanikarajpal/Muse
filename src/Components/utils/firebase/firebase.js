// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import {
  getAuth,
  signOut,
  onAuthStateChanged,
  signInWithPopup,
  signInWithRedirect,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

import { getFirestore, doc, getDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDGNuwPmYHTgwo0aoQuppeekGT09zwi3qE",
  authDomain: "capstone-c0efb.firebaseapp.com",
  projectId: "capstone-c0efb",
  storageBucket: "capstone-c0efb.appspot.com",
  messagingSenderId: "535351419965",
  appId: "1:535351419965:web:3bd89c038623911a97b654",
  measurementId: "G-0YRKV416ZQ",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);

const provider = new GoogleAuthProvider();

provider.setCustomParameters({
  prompt: "select_account",
});

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
export const signWithGoogleRedirect = () => signInWithRedirect(auth, provider);

export const createUserDocumentFromAuth = async (userAuth, localName) => {
  const userDocRef = doc(db, "users", userAuth.uid);
  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    const userName = displayName ? displayName : localName;

    try {
      await setDoc(userDocRef, {
        displayName: userName,
        email,
        createdAt,
      });
    } catch (error) {
      console.log("Couldn't create the user account ! ", error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signAuthUserWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const showDetails = async (userAuth) => {
  const userDoc = doc(db, "users", userAuth.uid);

  const docSnap = await getDoc(userDoc);
  let username = docSnap.data().displayName;

  return username;
};

export const signOutUser = async () => await signOut(auth);


e