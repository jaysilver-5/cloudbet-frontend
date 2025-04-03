import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCuQbZb8g6nNY-vYeY85UVHhG1HvGqm5aY",
  authDomain: "cloudbet-b0f69.firebaseapp.com",
  projectId: "cloudbet-b0f69",
  storageBucket: "cloudbet-b0f69.firebasestorage.app",
  messagingSenderId: "549347354711",
  appId: "1:549347354711:web:899a740e941342b8201b12",
  measurementId: "G-EXPKCQE8M7"
};

// ✅ Prevent duplicate Firebase initialization
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
