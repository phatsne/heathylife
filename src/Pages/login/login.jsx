import React from "react";
import { TextField, Button, Typography, Box, Checkbox, FormControlLabel } from "@mui/material";
import { AccountCircle, Lock } from "@mui/icons-material";
import Background from "../../Assets/Images/Background.jpg";
import "../login/login.css";

const LoginPage = () => {
  return (
    <div className="login-page" style={{ 
      background: `url(${Background}) no-repeat center center/cover`, 
      height: "100vh", 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center", 
      color: "white" 
    }}>
      <Box 
        className="login-container" 
        style={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          borderRadius: "16px",
          padding: "24px 32px",
          width: "400px",
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
          textAlign: "center"
        }}
      >
        <Typography 
          variant="h5" 
          className="login-title"
          style={{ fontFamily: "'Pacifico', cursive", color: "#4CAF50" }}
        >
          Welcome to HeathyLife
        </Typography>
        <Typography 
          variant="subtitle1" 
          style={{ fontFamily: "'Arial', sans-serif", color: "#757575", marginBottom: "20px" }}
        >
          Chăm sóc sức khỏe của bạn bắt đầu từ đây!
        </Typography>

        <form className="login-form" style={{ marginTop: "20px" }}>
          <Box style={{ display: "flex", alignItems: "center", marginBottom: "16px" }}>
            <AccountCircle style={{ color: "#757575", marginRight: "8px" }} />
            <TextField
              placeholder="Username"
              variant="outlined"
              fullWidth
            />
          </Box>

          <Box style={{ display: "flex", alignItems: "center", marginBottom: "16px" }}>
            <Lock style={{ color: "#757575", marginRight: "8px" }} />
            <TextField
              placeholder="Password"
              type="password"
              variant="outlined"
              fullWidth
            />
          </Box>

          <FormControlLabel
            control={<Checkbox style={{ color: "#757575" }} />}
            label={<span style={{ color: "#757575" }}>Remember me</span>}
          />
          <Typography style={{ marginBottom: "16px", textAlign: "right", color: "#f0f0f0", fontSize: "14px" }}>
            <a href="/forgot-password" style={{ color: "#757575" }}>Forgot password?</a>
          </Typography>

          <Button
            type="submit"
            variant="contained"
            fullWidth
            style={{
              backgroundColor: "#757575",
              color: "white",
              padding: "10px 0",
              marginTop: "16px",
              borderRadius: "20px",
            }}
          >
            Login
          </Button>
        </form>

        <Typography style={{ marginTop: "16px", fontSize: "14px", color: "#757575" }}>
          Don't have an account? <a href="/register" style={{ color: "#4CAF50" }}>Register</a>
        </Typography>
      </Box>
    </div>
  );
};

export default LoginPage;