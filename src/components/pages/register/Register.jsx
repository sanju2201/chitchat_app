import React from "react";
import "./register.scss";
import DriveFolderUploadOutlinedIcon from "@mui/icons-material/DriveFolderUploadOutlined";
import { Link } from "react-router-dom";
import DefaultProfile from "../../../assets/images/other/DefaultProfile.jpg";
import { useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../../firebase";

const Register = () => {
  const [img, setImg] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const user = await createUserWithEmailAndPassword(auth, email, password);
    } catch (err) {
      setError(true);
    }
  };

  return (
    <div className="register">
      <div className="registerWrapper">
        <div className="registerLeft">
          <h3 className="registerLogo">ChitChat</h3>
          <span className="registerDesc">
            Connect with friends and the world around you on ChitChat.
          </span>
        </div>
        <div className="registerRight">
          <div className="registerBox">
            <form className="rgisterForm" onSubmit={handleRegister}>
              <input
                type="text"
                placeholder="Username"
                id="username"
                className="registerInput"
                required
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                placeholder="Email"
                id="email"
                className="registerInput"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="password"
                placeholder="Password"
                id="password"
                className="registerInput"
                required
                onChange={(e) => setPassword(e.target.value)}
              />
              <button type="submit" className="registerButton">
                Sign Up
              </button>
              <Link to="/login">
                <button className="loginRegisterButton">
                  Log into Account
                </button>
              </Link>
              {error && (
                <span style={{ color: "red", fontSize: "12px" }}>
                  *Something went wrong
                </span>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
