// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCABR5W7S15mmnxJsBNweehDjxtm2ZYpGk",
  authDomain: "auth-moha-milon-87a86.firebaseapp.com",
  projectId: "auth-moha-milon-87a86",
  storageBucket: "auth-moha-milon-87a86.appspot.com",
  messagingSenderId: "407317935383",
  appId: "1:407317935383:web:9dd6da5505e2aa2163b352"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;