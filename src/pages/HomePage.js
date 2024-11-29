import React from "react";
import { Button, Container, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

const HomePage = ({ user }) => {
  return (
    <Container sx={{ padding: "50px", textAlign: "center" }}>
      {user ? (
        <>
          <Typography variant="h4" gutterBottom>
            Welcome, {user.displayName}
          </Typography>
          <Link to="/chat/general">
            <Button variant="contained" color="primary">
              Join General Chat Room
            </Button>
          </Link>
        </>
      ) : (
        <Typography variant="h5" color="textSecondary">
          Please log in to start chatting!
        </Typography>
      )}
    </Container>
  );
};

export default HomePage;
