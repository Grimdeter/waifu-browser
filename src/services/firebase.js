import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBm3-7rcra_L1eVlK2qNQ4g_0uRZMz0W3M",

  authDomain: "vue-sample-8b60b.firebaseapp.com",

  databaseURL:
    "https://vue-sample-8b60b-default-rtdb.europe-west1.firebasedatabase.app",

  projectId: "vue-sample-8b60b",

  storageBucket: "vue-sample-8b60b.appspot.com",

  messagingSenderId: "879387350203",

  appId: "1:879387350203:web:0ae1e01a9ec08ec545859e",
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();

export default db;
