import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyDBSgeJ-hpKiE7koEI1VjfqbQTW0DaGs2E",
    authDomain: "fb-clone-b7862.firebaseapp.com",
    databaseURL: "https://fb-clone-b7862.firebaseio.com",
    projectId: "fb-clone-b7862",
    storageBucket: "fb-clone-b7862.appspot.com",
    messagingSenderId: "677909754605",
    appId: "1:677909754605:web:66dab64b2252c4a42c92e4"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const db = firebase.firestore();
  export const auth = firebase.auth();
  export const storage = firebase.storage();
  export const googleProvider = new firebase.auth.GoogleAuthProvider();