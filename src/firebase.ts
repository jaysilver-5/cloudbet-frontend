import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyA0T7VtppX9J79L2qcKOeUEEa8vlV5PM-0",
    authDomain: "movie-list-641eb.firebaseapp.com",
    projectId: "movie-list-641eb",
    storageBucket: "movie-list-641eb.firebasestorage.app",
    messagingSenderId: "191246115812",
    appId: "1:191246115812:web:793e37c6bdee7a0538ddf1",
    measurementId: "G-FEH8N5S9H4"
  };

// ✅ Prevent duplicate Firebase initialization
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
