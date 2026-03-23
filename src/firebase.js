// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCsfknc6S71spnuRKFxmvgA7grOXGvc-PY",
    authDomain: "portfolio-938b9.firebaseapp.com",
    projectId: "portfolio-938b9",
    storageBucket: "portfolio-938b9.firebasestorage.app",
    messagingSenderId: "475764269659",
    appId: "1:475764269659:web:092cddf092a93a9747d57e",
    measurementId: "G-98W591V5TN"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);