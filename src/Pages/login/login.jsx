import React, { useState } from "react";
import { TextField, Button, Typography, Box, Checkbox, FormControlLabel } from "@mui/material";
import { AccountCircle, Lock } from "@mui/icons-material";
import Background from "../../Assets/Images/Background.jpg";
import { useNavigate } from "react-router-dom";
import { useMutationHook } from "../../services/useMutationhook"; // Hook để gọi mutation
import { loginUser } from "../../services/authService"; // Hàm API gọi login

const LoginPage = () => {
  // States lưu trữ dữ liệu người dùng
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  // Khai báo mutation sử dụng useMutationHook
  const mutation = useMutationHook(loginUser);

  // Xử lý khi người dùng submit form
  const handleLogin = (e) => {
    e.preventDefault();

    // Kiểm tra các trường input
    if (!email || !password) {
      setErrorMessage("Email và mật khẩu không được để trống.");
      return;
    }

    // Gọi API bằng mutation hook
    mutation.mutate(
      { email, password },
      {
        onSuccess: (data) => {
          if (data.status === "OK") {
            // Lưu token vào localStorage
            localStorage.setItem("access_token", data.access_token);
            localStorage.setItem("refresh_token", data.refresh_token);

            // Ghi nhớ thông tin nếu Remember Me được chọn
            if (rememberMe) {
              localStorage.setItem("remember_me", JSON.stringify({ email, password }));
            }

            // Điều hướng người dùng đến Home
            navigate("/home");
          } else {
            // Hiển thị lỗi từ API
            setErrorMessage(data.message || "Đăng nhập thất bại.");
          }
        },
        onError: (error) => {
          // Xử lý lỗi nếu có
          setErrorMessage(error.message || "Có lỗi xảy ra, vui lòng thử lại.");
        },
      }
    );
  };

  return (
    <div
      className="login-page"
      style={{
        background: `url(${Background}) no-repeat center center/cover`,
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Box
        className="login-container"
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
          Welcome to HealthyLife
        </Typography>
        <Typography
          variant="subtitle1"
          style={{ fontFamily: "'Arial', sans-serif", color: "#757575", marginBottom: "20px" }}
        >
          Chăm sóc sức khỏe của bạn bắt đầu từ đây!
        </Typography>

        {/* Hiển thị thông báo lỗi nếu có */}
        {errorMessage && (
          <Typography style={{ color: "red", marginBottom: "16px" }}>{errorMessage}</Typography>
        )}

        {/* Form đăng nhập */}
        <form onSubmit={handleLogin}>
          {/* Trường Email */}
          <Box style={{ display: "flex", alignItems: "center", marginBottom: "16px" }}>
            <AccountCircle style={{ color: "#757575", marginRight: "8px" }} />
            <TextField
              placeholder="Email"
              variant="outlined"
              fullWidth
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Box>

          {/* Trường Password */}
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

          {/* Remember Me */}
          <FormControlLabel
            control={
              <Checkbox
                checked={rememberMe}
                onChange={() => setRememberMe(!rememberMe)}
                style={{ color: "#757575" }}
              />
            }
            label={<span style={{ color: "#757575" }}>Remember me</span>}
          />

          {/* Nút Đăng Nhập */}
          <Button
            type="submit"
            variant="contained"
            fullWidth
            style={{
              backgroundColor: "#4CAF50",
              color: "white",
              padding: "10px 0",
              marginTop: "16px",
              borderRadius: "20px",
            }}
            disabled={mutation.isLoading}
          >
            {mutation.isLoading ? "Đang đăng nhập..." : "Đăng Nhập"}
          </Button>
        </form>

        <Typography style={{ marginTop: "16px", fontSize: "14px", color: "#757575" }}>
          Don't have an account?{" "}
          <a href="/register" style={{ color: "#4CAF50" }}>
            Register
          </a>
        </Typography>
      </Box>
    </div>
  );
};

export default LoginPage;
