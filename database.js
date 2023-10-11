// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDIAZjSpNpulQ_6KtvcQAecadojUlr3hdI",
    authDomain: "smart-complaints-efade.firebaseapp.com",
    projectId: "smart-complaints-efade",
    storageBucket: "smart-complaints-efade.appspot.com",
    messagingSenderId: "146912887278",
    appId: "1:146912887278:web:1018de532a34d281d20eff",
    measurementId: "G-C18FJZNY08"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

async function login() {
    firebase.auth().createUserWithEmailAndPassword('sudesh@gmail.com', 'password')
    .then((userCredential) => {
      // Signed in 
      var user = userCredential.user;
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      // ..
    });
};
