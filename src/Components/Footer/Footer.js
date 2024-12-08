import React from "react";
import { Box, Typography, Link, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#333",
        color: "white",
        padding: "20px 0",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        textAlign: "center",
        marginTop: "50px",
      }}
    >
      {/* Thông tin liên hệ và bản quyền */}
      <Box sx={{ marginBottom: { xs: "10px", sm: "0" } }}>
        <Typography variant="body2" sx={{ mb: 1 }}>
          © {new Date().getFullYear()} Phatsne. All rights reserved.
        </Typography>
        <Typography variant="body2">Contact us: contact@bmiapp.com</Typography>
      </Box>

      {/* Social Media Links */}
      <Box>
        <Typography variant="body2" sx={{ mb: 1 }}>
          Follow us:
        </Typography>
        <IconButton
          component="a"
          href="https://www.facebook.com"
          target="_blank"
          sx={{ color: "white" }}
        >
          <FacebookIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://twitter.com"
          target="_blank"
          sx={{ color: "white" }}
        >
          <TwitterIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://instagram.com"
          target="_blank"
          sx={{ color: "white" }}
        >
          <InstagramIcon />
        </IconButton>
      </Box>

      {/* Liên kết nhanh */}
      <Box sx={{ marginTop: { xs: "10px", sm: "0" }, display: "flex" }}>
        <Link href="/about" color="inherit" underline="hover" sx={{ ml: 2 }}>
          About Us
        </Link>
        <Link href="/contact" color="inherit" underline="hover" sx={{ ml: 2 }}>
          Contact
        </Link>
        <Link href="/privacy-policy" color="inherit" underline="hover" sx={{ ml: 2 }}>
          Privacy Policy
        </Link>
      </Box>
    </Box>
  );
};

export default Footer;
