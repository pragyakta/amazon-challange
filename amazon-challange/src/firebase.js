import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAKk00d0BbkL8ZwWqsg8U0XG8x6lJcO88w",
    authDomain: "challenge-dc1f9.firebaseapp.com",
    projectId: "challenge-dc1f9",
    storageBucket: "challenge-dc1f9.appspot.com",
    messagingSenderId: "656857880996",
    appId: "1:656857880996:web:cb6ece597b3afcbd214931",
    measurementId: "G-VWJG5Q2F0N"
  };
  //const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export{auth};