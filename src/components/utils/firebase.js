// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCe0iKp4Gwd6y9xUSrKUNT6Sd3wH0cBXCY",
  authDomain: "netflix-gpt-3907c.firebaseapp.com",
  projectId: "netflix-gpt-3907c",
  storageBucket: "netflix-gpt-3907c.firebasestorage.app",
  messagingSenderId: "1041831198042",
  appId: "1:1041831198042:web:28224c64a9a834a0ac4763",
  measurementId: "G-MZ5GFM56CM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);