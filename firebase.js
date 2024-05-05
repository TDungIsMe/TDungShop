// Import the functions you need from the SDKs you need\
import {} from '/firebase.js'


import { initializeApp } from "https://www.gstatic.com/firebasejs/10.11.0/firebase-app.js";
// import { getAnalytics } from "firebase/analytics";
import { getFirestore, collection, getDocs } from 'https://www.gstatic.com/firebasejs/10.11.0/firebase-firestore.js';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDasUGl-Z7nJt6Lr4lqo2ridw4VaFE3IwQ",
  authDomain: "tdungshop-503d0.firebaseapp.com",
  projectId: "tdungshop-503d0",
  storageBucket: "tdungshop-503d0.appspot.com",
  messagingSenderId: "579029725047",
  appId: "1:579029725047:web:9ca16be0c93b8961ddbb72",
  measurementId: "G-MM2RC4D5TY"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);