import React from "react";
import "./style.css";
import logo from "../../assets/logo.webp";
import { Button } from "@mui/material";
import { Link } from "react-router-dom";
const Landing = () => {
  return (
    <div className="landingContainer">
      <div className="logoContainer">
        <img src={logo} alt="Logo" />
      </div>
      <h5 className="appName">ChildCare Hub</h5>
      <p className="subtitle">Book a Babysitter</p>
      <div className="btnContainer">
        <Link to="/search">
          <Button
            className="customBtn"
            sx={{
              color: "#000",
              backgroundColor: "#f9f9f9",
              textTransform: "capitalize",
              fontSize: "15px",
            }}
            variant="contained"
          >
            Now
          </Button>
        </Link>
        <Link to="/search">
          <Button
            className="customBtn"
            sx={{
              color: "#000",
              backgroundColor: "#f9f9f9",
              textTransform: "capitalize",
              fontSize: "15px",
            }}
            variant="contained"
          >
            Later
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Landing;
