import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore/lite"


const firebaseConfig = {
    apiKey: "AIzaSyDVql7AbP7tCqnXp40knxtOPQjAOailjm8",
    authDomain: "cat-tinder-1573b.firebaseapp.com",
    databaseURL:"https://cat-tinder-1573b.firebaseio.com",
    projectId: "cat-tinder-1573b",
    storageBucket: "cat-tinder-1573b.appspot.com",
    messagingSenderId: "720646835896",
    appId: "1:720646835896:web:1718a3c63e3050d220ee4d",
    measurementId: "G-YSLR39W1M4"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const database = getFirestore(firebaseApp);

  export default database;