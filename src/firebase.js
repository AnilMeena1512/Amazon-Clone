import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyCCIDk6hZDt3xPvjuRNkueyNN7KT2_70WM",
  authDomain: "clone-80cea.firebaseapp.com",
  projectId: "clone-80cea",
  storageBucket: "clone-80cea.appspot.com",
  messagingSenderId: "444438580934",
  appId: "1:444438580934:web:93c0aaeaf5c84371bb91c7",
  measurementId: "G-SX41XFZS0J",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const auth = firebase.auth();

export { db, auth };
