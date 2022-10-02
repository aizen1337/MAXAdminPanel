// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: "shiftit-985fc.firebaseapp.com",
  projectId: "shiftit-985fc",
  storageBucket: "shiftit-985fc.appspot.com",
  messagingSenderId: "628441465567",
  appId: "1:628441465567:web:1d77c407996a7fbcb85f6a",
  measurementId: "G-M6SFSJ4Y8G"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const db = getFirestore(app);
export const storage = getStorage(app)
