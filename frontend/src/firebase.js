// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDSUMTij9AF9OQV6OOk2MFTZv490FFKbS8",              
  authDomain: "authentication-d0889.firebaseapp.com",
  projectId: "authentication-d0889",
  storageBucket: "authentication-d0889.appspot.com",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };
