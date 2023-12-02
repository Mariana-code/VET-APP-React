// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import { initializeApp } from "firebase/app";
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAk4giYCDMnQCdQY_olvQJcS5WtjnMHGMU",
    authDomain: "vetapp-9a424.firebaseapp.com",
    projectId: "vetapp-9a424",
    storageBucket: "vetapp-9a424.appspot.com",
    messagingSenderId: "286158553409",
    appId: "1:286158553409:web:ea0ea58b861c34c90be1c0",
    measurementId: "G-99MT97JJEL"
};

// Use this to initialize the firebase App
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const app = initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export default{ auth, db, firebase };

