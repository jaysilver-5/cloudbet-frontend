import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyAQNSDDUdAYYazlO-PO2KjJi_5SmlV57qA",
    authDomain: "cloudbet-dc6b9.firebaseapp.com",
    projectId: "cloudbet-dc6b9",
    storageBucket: "cloudbet-dc6b9.firebasestorage.app",
    messagingSenderId: "1057332558636",
    appId: "1:1057332558636:web:274ac831b4a1030f740a89",
    measurementId: "G-2J4LT7THTC"
  };

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)



export { app, auth };
