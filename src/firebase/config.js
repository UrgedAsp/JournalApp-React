// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDwd1zbPxjuNowbgNKwHXD6DA6SpKM_Y1Y",
  authDomain: "react-curso-b919a.firebaseapp.com",
  projectId: "react-curso-b919a",
  storageBucket: "react-curso-b919a.appspot.com",
  messagingSenderId: "785308091117",
  appId: "1:785308091117:web:3444270d4267d7017bc2e4",
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp);
export const FirebaseDB = getFirestore(FirebaseApp);
