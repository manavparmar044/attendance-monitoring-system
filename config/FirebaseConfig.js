// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "attendance-monitoring-9e8da.firebaseapp.com",
  projectId: "attendance-monitoring-9e8da",
  storageBucket: "attendance-monitoring-9e8da.appspot.com",
  messagingSenderId: "1047125378773",
  appId: "1:1047125378773:web:07b6de9ab4bd340a5ec45c"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)