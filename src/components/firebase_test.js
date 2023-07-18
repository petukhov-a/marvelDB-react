// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBjSv94GofpU7tnqdnI_5-3aSNsLAltM0Q",
  authDomain: "marvelreact-77ac8.firebaseapp.com",
  projectId: "marvelreact-77ac8",
  storageBucket: "marvelreact-77ac8.appspot.com",
  messagingSenderId: "165826979813",
  appId: "1:165826979813:web:94dc77550e8a9363c8310c",
  measurementId: "G-TDTVJ24ZCS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);