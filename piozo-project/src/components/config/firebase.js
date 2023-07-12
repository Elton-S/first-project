import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyD79cnW3ll1hxPgkWUnLFHlEnNRQMG0d4w",
    authDomain: "esp-firebase-demo-aab41.firebaseapp.com",
    databaseURL: "https://esp-firebase-demo-aab41-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "esp-firebase-demo-aab41",
    storageBucket: "esp-firebase-demo-aab41.appspot.com",
    messagingSenderId: "966782043727",
    appId: "1:966782043727:web:0fb8c6193d0408334d4c3a",
    measurementId: "G-QKDKSVZRFM"
};

const app = initializeApp(firebaseConfig);
export const auth =  getAuth(app);

export const googleProvider = new GoogleAuthProvider();
