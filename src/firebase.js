// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC-3fntNJMOTDrtrqnfpimQc5xW7g0c4nc",
    authDomain: "rick-morty-84465.firebaseapp.com",
    projectId: "rick-morty-84465",
    storageBucket: "rick-morty-84465.appspot.com",
    messagingSenderId: "1006753627567",
    appId: "1:1006753627567:web:86f29fbc424a26bdf6035a"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
export{firebase}