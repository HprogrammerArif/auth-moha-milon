// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOukBoQ5qUr0s6UrVAkcDCFVppJvvtWm4",
  authDomain: "auth-moha-milon-c204c.firebaseapp.com",
  projectId: "auth-moha-milon-c204c",
  storageBucket: "auth-moha-milon-c204c.appspot.com",
  messagingSenderId: "971108859601",
  appId: "1:971108859601:web:09ff943e39623d7b634ff0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;