import React from "react";
import { Paper, Typography } from "@mui/material";

const Message = ({ message }) => {
  return (
    <Paper
      sx={{ padding: "10px", marginBottom: "10px", backgroundColor: "#f1f1f1" }}
    >
      <Typography variant="body1">
        <strong>{message.user}</strong>: {message.text}
      </Typography>
    </Paper>
  );
};

export default Message;
