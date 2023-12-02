// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
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

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);