// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDVql7AbP7tCqnXp40knxtOPQjAOailjm8",
  authDomain: "cat-tinder-1573b.firebaseapp.com",
  projectId: "cat-tinder-1573b",
  storageBucket: "cat-tinder-1573b.appspot.com",
  messagingSenderId: "720646835896",
  appId: "1:720646835896:web:1718a3c63e3050d220ee4d",
  measurementId: "G-YSLR39W1M4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);