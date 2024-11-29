import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth, logout } from "./firebase/firebaseConfig";
import HomePage from "./pages/HomePage";
import ChatRoom from "./components/ChatRoom";
import Navbar from "./components/Navbar";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  return (
    <Router>
      <div className="App">
        <Navbar user={user} handleLogout={logout} />
        <Routes>
          <Route path="/" element={<HomePage user={user} />} />
          <Route path="/chat/:roomId" element={<ChatRoom user={user} />} />
        </Routes>
        <ToastContainer />
      </div>
    </Router>
  );
};

export default App;
