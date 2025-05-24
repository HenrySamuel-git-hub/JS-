
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.7.1/firebase-app.js";
  import{getAuth} from "https://www.gstatic.com/firebasejs/11.7.1/firebase-auth.js";
  import {getFirestore} from "https://www.gstatic.com/firebasejs/11.7.1/firebase-firestore.js"
  const firebaseConfig = {
    apiKey: "AIzaSyDTA-5cnJ2O-dcuy95up7ykhJ22h-TKTp0",
    authDomain: "r-8ae7c.firebaseapp.com",
    projectId: "r-8ae7c",
    storageBucket: "r-8ae7c.firebasestorage.app",
    messagingSenderId: "262415817768",
    appId: "1:262415817768:web:aa67a0e51c242ae852e91d",
    measurementId: "G-MC6TGPJSFC"
  };

  // Initialize Firebase
  export const firebaseproject = initializeApp(firebaseConfig);
  export const authentication =getAuth(firebaseproject)
  export const db=getFirestore(firebaseproject)