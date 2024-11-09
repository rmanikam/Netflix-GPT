// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAGG1wHV11LkEKoND80voroPDxjK7VUtmU",
  authDomain: "netflix-gpt-1ed2b.firebaseapp.com",
  projectId: "netflix-gpt-1ed2b",
  storageBucket: "netflix-gpt-1ed2b.firebasestorage.app",
  messagingSenderId: "361425403818",
  appId: "1:361425403818:web:f4a88d992d04a0fd1935d3",
  measurementId: "G-H8FXY25B7L"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();