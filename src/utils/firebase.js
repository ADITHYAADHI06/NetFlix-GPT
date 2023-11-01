// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAiWeQ2-BihKNJ9djnXnTgE2s_0UHVEsU8",
    authDomain: "netflix-gpt-3.firebaseapp.com",
    projectId: "netflix-gpt-3",
    storageBucket: "netflix-gpt-3.appspot.com",
    messagingSenderId: "1066051912799",
    appId: "1:1066051912799:web:1bd81ed48ba89d704f87ea",
    measurementId: "G-EQ50BDNHSD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


export const auth = getAuth();