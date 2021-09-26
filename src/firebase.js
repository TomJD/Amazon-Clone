import firebase from 'firebase'

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = firebase.initializeApp({
    apiKey: "AIzaSyBV8RxDDTIyhMCvZu09tTIk5BSmD5qepeg",
    authDomain: "clone-83ebf.firebaseapp.com",
    projectId: "clone-83ebf",
    storageBucket: "clone-83ebf.appspot.com",
    messagingSenderId: "118393485978",
    appId: "1:118393485978:web:1618e77b7cc3b12f5afd23",
    measurementId: "G-BJB7XGJ9QR"
});

const db = firebase.firestore();

const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };