import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBePfGyPcgtuebu94A9lNzHMK1s-UTh_LM",
  authDomain: "test-projects-6a0e4.firebaseapp.com",
  projectId: "test-projects-6a0e4",
  storageBucket: "test-projects-6a0e4.appspot.com",
  messagingSenderId: "59850745241",
  appId: "1:59850745241:web:6fea840f0f6a140fb95f08",
};

firebase.initializeApp(firebaseConfig);
let db = firebase.firestore();
let auth = firebase.auth();
let timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { db, auth, timestamp };
