import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-app.js";
import { getFirestore,collection, addDoc,getDocs } from "https://www.gstatic.com/firebasejs/10.12.4/firebase-firestore.js";
const firebaseConfig = {
    apiKey: "AIzaSyDpBKzoXV6P3AzilhcFpwFXJYrmz2bRVN8",
    authDomain: "first-firebase-app-ea909.firebaseapp.com",
    projectId: "first-firebase-app-ea909",
    storageBucket: "first-firebase-app-ea909.appspot.com",
    messagingSenderId: "1587851198",
    appId: "1:1587851198:web:9aa7409a19dbb3f76ed3ef"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export {app,db,collection,addDoc,getDocs}
