// src/components/Login.js
import React from "react";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

const Login = ({ setUser }) => {
  const handleLogin = async () => {
    const provider = new GoogleAuthProvider();
    try {
      const result = await signInWithPopup(auth, provider);
      setUser(result.user);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="login">
      <button onClick={handleLogin}>Sign in with Google</button>
    </div>
  );
};

export default Login;
