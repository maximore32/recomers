// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCXyle8oUBKZaQRmv1XAhjgcWnYL_hVXq4",
  authDomain: "recomers-712d2.firebaseapp.com",
  projectId: "recomers-712d2",
  storageBucket: "recomers-712d2.appspot.com",
  messagingSenderId: "1090989289329",
  appId: "1:1090989289329:web:438de29f0941cddcbad0d0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const FirestoreApp = ()=> app
