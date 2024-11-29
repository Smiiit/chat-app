import React from "react";
import { AppBar, Toolbar, Button, Typography, Container } from "@mui/material";
import { Link } from "react-router-dom";
import { loginWithGoogle } from "../firebase/firebaseConfig";

const Navbar = ({ user, handleLogout }) => {
  return (
    <AppBar position="sticky">
      <Toolbar>
        <Container maxWidth="lg" sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography variant="h6">ChatApp</Typography>
          <div>
            {user ? (
              <>
                <Link to="/">
                  <Button color="inherit">Home</Button>
                </Link>
                <Link to="/chat/general">
                  <Button color="inherit">General Chat</Button>
                </Link>
                <Button color="inherit" onClick={handleLogout}>
                  Logout
                </Button>
              </>
            ) : (
              <Button color="inherit" onClick={loginWithGoogle}>
                Login with Google
              </Button>
            )}
          </div>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
