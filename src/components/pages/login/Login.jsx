import React, { useRef } from "react";
import { Link } from "react-router-dom";
import "./login.scss";
import logo from "../../../assets/images/chitchat/logo.png";
import { useUserContext } from "../../../context/UserContext";

const Login = () => {
  const emailRef = useRef();
  const psdRef = useRef();
  const { signInUser, forgotPassword } = useUserContext();

  const onSubmit = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const password = psdRef.current.value;
    if (email && password) signInUser(email, password);
  };

  const forgotPasswordHandler = () => {
    const email = emailRef.current.value;
    if (email)
      forgotPassword(email).then(() => {
        emailRef.current.value = "";
      });
  };

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <img src={logo} alt="" className="chitChatLogo" />
          <h3 className="loginLogo">ChitChat</h3>
          <span className="loginDesc">
            Connect with friends and the world around you on ChitChat.
          </span>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <div className="bottom">
              <form className="bottomBox" onSubmit={onSubmit}>
                <input
                  type="email"
                  placeholder="Email"
                  id="email"
                  ref={emailRef}
                  className="loginInput"
                  required
                />
                <input
                  type="password"
                  placeholder="Password"
                  id="password"
                  ref={psdRef}
                  className="loginInput"
                  required
                />

                <button type="submit" className="loginButton">
                  Sign In
                </button>
                <Link to="/register">
                  <button className="loginRegisterButton">
                    Create a New Account
                  </button>
                </Link>
                <p onClick={forgotPasswordHandler}>Forgot Password?</p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
