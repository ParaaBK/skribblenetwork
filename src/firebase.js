import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/database';

const firebaseConfig = {
    apiKey: "AIzaSyBzGSEYgibOHJVkFtrGRj2Imt96c9rpnZs",
    authDomain: "chat-live-6e998.firebaseapp.com",
    projectId: "chat-live-6e998",
    storageBucket: "chat-live-6e998.appspot.com",
    messagingSenderId: "894451107636",
    appId: "1:894451107636:web:b8d84a912bcbd1482b4761",
    measurementId: "G-K6XQKR35WH"
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const database = firebase.database();
