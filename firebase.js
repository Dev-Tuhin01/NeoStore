// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDgbfT-LCujGBbXOjZij7Boobx6aIAOYIw",
  authDomain: "neostore-7dade.firebaseapp.com",
  projectId: "neostore-7dade",
  storageBucket: "neostore-7dade.appspot.com",
  messagingSenderId: "914526669970",
  appId: "1:914526669970:web:a3413b8f6d3ff8f7d06a4b",
  measurementId: "G-BJW16HMT3F",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
