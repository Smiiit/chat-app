import React, { useState, useEffect } from "react";
import { db } from "../firebase/firebaseConfig";
import { collection, addDoc, serverTimestamp, query, orderBy, onSnapshot } from "firebase/firestore";
import { useParams } from "react-router-dom";
import { Paper, Typography, Container, TextField, Button } from "@mui/material";
import Message from "./Message";

const ChatRoom = ({ user }) => {
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState("");
  const { roomId } = useParams();

  useEffect(() => {
    const q = query(collection(db, "rooms", roomId, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      const messagesData = [];
      querySnapshot.forEach((doc) => {
        messagesData.push(doc.data());
      });
      setMessages(messagesData);
    });

    return () => unsubscribe();
  }, [roomId]);

  const handleSendMessage = async (e) => {
    e.preventDefault();

    if (newMessage.trim()) {
      await addDoc(collection(db, "rooms", roomId, "messages"), {
        text: newMessage,
        user: user.displayName,
        timestamp: serverTimestamp(),
      });
      setNewMessage("");
    }
  };

  return (
    <Container sx={{ padding: "20px" }}>
      <Paper sx={{ padding: "20px", marginBottom: "20px" }} elevation={3}>
        <Typography variant="h6">Welcome to the {roomId} room</Typography>
        <div style={{ maxHeight: "400px", overflowY: "auto", marginBottom: "20px" }}>
          {messages.map((msg, index) => (
            <Message key={index} message={msg} />
          ))}
        </div>
        <form onSubmit={handleSendMessage} style={{ display: "flex" }}>
          <TextField
            label="Type your message..."
            variant="outlined"
            fullWidth
            value={newMessage}
            onChange={(e) => setNewMessage(e.target.value)}
          />
          <Button type="submit" variant="contained" color="primary" sx={{ marginLeft: "10px" }}>
            Send
          </Button>
        </form>
      </Paper>
    </Container>
  );
};

export default ChatRoom;
