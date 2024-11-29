import { initializeApp } from "firebase/app";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyCOBwPQjXk_Wvs1ubStS5s77qcNuR2322s",
  authDomain: "chat-app-97d84.firebaseapp.com",
  projectId: "chat-app-97d84",
  storageBucket: "chat-app-97d84.firebasestorage.app",
  messagingSenderId: "331883871802",
  appId: "1:331883871802:web:9c285ceebc68604bf8ff03",
  measurementId: "G-RWY2EVT0NE",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and Firestore
const auth = getAuth(app);
const db = getFirestore(app);

const googleProvider = new GoogleAuthProvider();

const loginWithGoogle = async () => {
  try {
    await signInWithPopup(auth, googleProvider);
  } catch (error) {
    console.error("Error signing in with Google", error);
  }
};

const logout = async () => {
  try {
    await signOut(auth);
  } catch (error) {
    console.error("Error signing out", error);
  }
};

export { auth, db, loginWithGoogle, logout };
