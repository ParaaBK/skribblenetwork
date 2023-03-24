// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";
import {getFirestore} from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBzGSEYgibOHJVkFtrGRj2Imt96c9rpnZs",
  authDomain: "chat-live-6e998.firebaseapp.com",
  projectId: "chat-live-6e998",
  storageBucket: "chat-live-6e998.appspot.com",
  messagingSenderId: "894451107636",
  appId: "1:894451107636:web:b8d84a912bcbd1482b4761",
  measurementId: "G-K6XQKR35WH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)