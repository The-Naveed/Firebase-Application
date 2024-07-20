// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getFirestore,collection, addDoc,getDocs } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDpBKzoXV6P3AzilhcFpwFXJYrmz2bRVN8",
    authDomain: "first-firebase-app-ea909.firebaseapp.com",
    projectId: "first-firebase-app-ea909",
    storageBucket: "first-firebase-app-ea909.appspot.com",
    messagingSenderId: "1587851198",
    appId: "1:1587851198:web:9aa7409a19dbb3f76ed3ef"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export {app,db,collection,addDoc,getDocs}
