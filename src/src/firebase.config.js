// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyASwIxshDO7KO_iUyvoNWB3LSM3HMM2yTY",
  authDomain: "otp-project-1e3a6.firebaseapp.com",
  projectId: "otp-project-1e3a6",
  storageBucket: "otp-project-1e3a6.appspot.com",
  messagingSenderId: "480273749288",
  appId: "1:480273749288:web:72e41a4963600b974fec1d",
  measurementId: "G-BHSE59BFBS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//const analytics = getAnalytics(app);

export const auth = getAuth(app)