import React, { useState } from "react";
import { TextField, Button, Typography, Box, Checkbox, FormControlLabel } from "@mui/material";
import { AccountCircle, Lock, Email } from "@mui/icons-material";
import Background from "../../Assets/Images/Background.jpg";
import { useNavigate } from "react-router-dom";
// import { useMutationHook } from "../../services/useMutationhook"; // Hook to call mutation
// import { registerUser } from "../../services/authService"; // API call for registration

const RegisterPage = () => {
  // States to store user data
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  // Mutation hook for registration
//   const mutation = useMutationHook(registerUser);

//   // Handle form submission
//   const handleRegister = (e) => {
//     e.preventDefault();

//     // Validate input fields
//     if (!name || !email || !password || !confirmPassword) {
//       setErrorMessage("All fields are required.");
//       return;
//     }

//     if (password !== confirmPassword) {
//       setErrorMessage("Passwords do not match.");
//       return;
//     }

//     if (!termsAccepted) {
//       setErrorMessage("You must accept the terms and conditions.");
//       return;
//     }

//     // Call API with mutation hook
//     mutation.mutate(
//       { name, email, password },
//       {
//         onSuccess: (data) => {
//           if (data.status === "OK") {
//             // Navigate to Login page after successful registration
//             navigate("/login");
//           } else {
//             setErrorMessage(data.message || "Registration failed.");
//           }
//         },
//         onError: (error) => {
//           setErrorMessage(error.message || "An error occurred. Please try again.");
//         },
//       }
//     );
//   };

  return (
    <div
      className="register-page"
      style={{
        background: `url(${Background}) no-repeat center center/cover`,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        className="register-container"
        style={{
          background: "rgba(255, 255, 255, 0.1)",
          backdropFilter: "blur(10px)",
          borderRadius: "16px",
          padding: "24px 32px",
          width: "400px",   
          boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
          textAlign: "center",
        }}
      >
        <Typography variant="h5" style={{ fontFamily: "'Pacifico', cursive", color: "#4CAF50" }}>
          Join HealthyLife
        </Typography>
        <Typography
          variant="subtitle1"
          style={{ fontFamily: "'Arial', sans-serif", color: "#757575", marginBottom: "20px" }}
        >
          Your health journey starts here!
        </Typography>

        {/* Display error message if any */}
        {errorMessage && (
          <Typography style={{ color: "red", marginBottom: "16px" }}>{errorMessage}</Typography>
        )}

        {/* Registration Form */}
        <form>
          {/* Name Field */}
          <Box style={{ display: "flex", alignItems: "center", marginBottom: "16px" }}>
            <AccountCircle style={{ color: "#757575", marginRight: "8px" }} />
            <TextField
              placeholder="Name"
              variant="outlined"
              fullWidth
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Box>

          {/* Email Field */}
          <Box style={{ display: "flex", alignItems: "center", marginBottom: "16px" }}>
            <Email style={{ color: "#757575", marginRight: "8px" }} />
            <TextField
              placeholder="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>

          {/* Password Field */}
          <Box style={{ display: "flex", alignItems: "center", marginBottom: "16px" }}>
            <Lock style={{ color: "#757575", marginRight: "8px" }} />
            <TextField
              placeholder="Password"
              type="password"
              variant="outlined"
              fullWidth
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Box>

          {/* Confirm Password Field */}
          <Box style={{ display: "flex", alignItems: "center", marginBottom: "16px" }}>
            <Lock style={{ color: "#757575", marginRight: "8px" }} />
            <TextField
              placeholder="Confirm Password"
              type="password"
              variant="outlined"
              fullWidth
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
          </Box>

          {/* Terms and Conditions */}
          <FormControlLabel
            control={
              <Checkbox
                checked={termsAccepted}
                onChange={() => setTermsAccepted(!termsAccepted)}
                style={{ color: "#757575" }}
              />
            }
            label={<span style={{ color: "#757575" }}>I accept the terms and conditions</span>}
          />

          {/* Register Button */}
          <Button
            type="submit"
            variant="contained"
            fullWidth
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              padding: "10px 0",
              height: "40px",
              marginTop: "16px",
              borderRadius: "20px",
            }}
            // disabled={mutation.isLoading}
          >
            đăng ký
            {/* {mutation.isLoading ? "Registering..." : "Register"} */}
          </Button>
        </form>

        <Typography style={{ marginTop: "16px", fontSize: "14px", color: "#757575" }}>
          Already have an account?{" "}
          <a href="/login" style={{ color: "#4CAF50" }}>
            Login
          </a>
        </Typography>
      </Box>
    </div>
  );
};

export default RegisterPage;
