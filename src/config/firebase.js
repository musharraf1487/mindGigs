// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDdzGx1e4JRX8kEYLpTV_ulY4mM3R1G2aQ",
    authDomain: "mindgigs-62f27.firebaseapp.com",
    projectId: "mindgigs-62f27",
    storageBucket: "mindgigs-62f27.firebasestorage.app",
    messagingSenderId: "856428049510",
    appId: "1:856428049510:web:9276e3f88909ae0425a9a7",
    measurementId: "G-Z3MHRP34F8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth = getAuth(app);
export const db = getFirestore(app);
export const storage = getStorage(app);
