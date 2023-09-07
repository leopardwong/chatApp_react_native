// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getAuth} from "firebase/auth";
import { getFirestore} from "firebase/firestore"; 
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAy1D8kLdsbiZGUg8Js85wNm4kJlmSy93Q",
  authDomain: "chatapp-react-1ca0b.firebaseapp.com",
  projectId: "chatapp-react-1ca0b",
  storageBucket: "chatapp-react-1ca0b.appspot.com",
  messagingSenderId: "859539089966",
  appId: "1:859539089966:web:7db19be1bf0738d3c84dbf",
  measurementId: "G-L4JPJ856FW"
};

// Initialize Firebase
export const FIREBASE_APP = initializeApp(firebaseConfig);
export const FIREBASE_AUTH = getAuth(FIREBASE_APP);
export const FIREBASE_DB = getFirestore(FIREBASE_APP);
const analytics = getAnalytics(FIREBASE_APP);