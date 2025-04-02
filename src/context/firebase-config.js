// firebase-config.js
import { initializeApp } from "firebase/app";
import { getAuth, GithubAuthProvider, GoogleAuthProvider } from "firebase/auth";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyA0T7VtppX9J79L2qcKOeUEEa8vlV5PM-0",
    authDomain: "movie-list-641eb.firebaseapp.com",
    projectId: "movie-list-641eb",
    storageBucket: "movie-list-641eb.firebasestorage.app",
    messagingSenderId: "191246115812",
    appId: "1:191246115812:web:793e37c6bdee7a0538ddf1",
    measurementId: "G-FEH8N5S9H4"
  };

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);
export { messaging, getToken, onMessage };

export const auth = getAuth(app);

// Google and GitHub providers
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();
