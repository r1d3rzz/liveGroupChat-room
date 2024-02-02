import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCgdbtqBZV2TggX6KpArDcTyy4CkTgcUvk",
  authDomain: "vue-testing-project-e9706.firebaseapp.com",
  projectId: "vue-testing-project-e9706",
  storageBucket: "vue-testing-project-e9706.appspot.com",
  messagingSenderId: "412183277932",
  appId: "1:412183277932:web:af8dbce6aba16698368349",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);

export { db, auth };
