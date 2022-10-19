
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBKwxkcDrAzPdGJNOizW_LAMRoocUjB_gU",
    authDomain: "netflix-clone-6e81f.firebaseapp.com",
    projectId: "netflix-clone-6e81f",
    storageBucket: "netflix-clone-6e81f.appspot.com",
    messagingSenderId: "579095030412",
    appId: "1:579095030412:web:8f0ec0cd4a69d0decd69a9"
  };


  const firebaseApp  = firebase.initializeApp(firebaseConfig);
  const  db = firebaseApp.firestore();
  const auth =  firebase.auth();

  export {auth,db}
 