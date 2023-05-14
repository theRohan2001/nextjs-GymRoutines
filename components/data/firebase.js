import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDh1eUmWE6lv5uap5UoLdgw5aufIfuTsuM",
  authDomain: "gym-routines-92f88.firebaseapp.com",
  projectId: "gym-routines-92f88",
  storageBucket: "gym-routines-92f88.appspot.com",
  messagingSenderId: "45211976636",
  appId: "1:45211976636:web:8538c073190c28e9eb61b9",
  measurementId: "G-XXMBRM1VLB"
};

if (firebase.apps.length === 0) {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.firestore().settings({ experimentalForceLongPolling: true });
} else {
  console.log("firebase apps already running...");
}

const auth = firebase.auth();
const db = firebase.firestore();

const uiConfig = {
  // Popup signin flow rather than redirect flow.
  signInFlow: "popup",
  // We will display Google as auth providers.
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  ],
  callbacks: {
    // Avoid redirects after sign-in.
    signInSuccessWithAuthResult: () => false,
  },
};

export { auth, db, uiConfig };
