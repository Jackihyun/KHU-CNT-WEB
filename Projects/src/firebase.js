// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDrOZAnwN7NVM84S7IMT3Q_wSGAfIX8o4Q",
  authDomain: "khu-cnt-guest.firebaseapp.com",
  projectId: "khu-cnt-guest",
  storageBucket: "khu-cnt-guest.appspot.com",
  messagingSenderId: "666818638870",
  appId: "1:666818638870:web:6eb93dfe5225a49ff37137",
  measurementId: "G-WXGL1GSHQJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
