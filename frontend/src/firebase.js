import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",              
  authDomain: "YOUR_PROJECT_Id.firebaseapp.com",
  projectId: "YOUR_PROJECT_Id",
  storageBucket: "YOUR_PROJECT_Id.appspot.com",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

export { auth, provider };