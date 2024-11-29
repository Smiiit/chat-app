import React, { useState } from "react";
import { db, auth } from "../firebase/firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { Button, TextField } from "@mui/material";

const MessageInput = ({ roomId, user }) => {
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (message.trim()) {
      try {
        await addDoc(collection(db, "rooms", roomId, "messages"), {
          text: message,
          user: user.displayName,
          timestamp: serverTimestamp(),
        });
        setMessage("");
      } catch (error) {
        console.error("Error sending message:", error);
      }
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        label="Message"
        variant="outlined"
        fullWidth
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        sx={{ marginBottom: "10px" }}
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Send
      </Button>
    </form>
  );
};

export default MessageInput;
