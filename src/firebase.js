
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDWOCSSU-fW9cntrSbRmKS-_m1rlmTSvgw",
    authDomain: "chitchat-app-d9b38.firebaseapp.com",
    projectId: "chitchat-app-d9b38",
    storageBucket: "chitchat-app-d9b38.appspot.com",
    messagingSenderId: "565709142059",
    appId: "1:565709142059:web:0bbb37d26b25c90414126e",
    measurementId: "G-80CPX9K68E"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;

const analytics = getAnalytics(app);


