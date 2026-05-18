// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD6Qf7BZq1BeQhO6RpRvjyEEcuTqlrpyfU",
  authDomain: "kisansathi-8964b.firebaseapp.com",
  projectId: "kisansathi-8964b",
  storageBucket: "kisansathi-8964b.firebasestorage.app",
  messagingSenderId: "64095748016",
  appId: "1:64095748016:web:31080cb64f80900919a075"
};

// Initialize Firebase
const app =
  !getApps().length
    ? initializeApp(firebaseConfig)
    : getApp();

const auth = getAuth(app);

export { app, auth };