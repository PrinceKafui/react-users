import { initializeApp } from "firebase/app";
import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBh9Ca6P1oAXeuyun6g8jrlR5UC8UPgbQo",
  authDomain: "react-users-app-3f5c6.firebaseapp.com",
  projectId: "react-users-app-3f5c6",
  storageBucket: "react-users-app-3f5c6.appspot.com",
  messagingSenderId: "892061556843",
  appId: "1:892061556843:web:8a0f7d2b258fc0f791912e",
  measurementId: "G-8C7091REBG",
};

const app = initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
