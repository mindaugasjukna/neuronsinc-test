import React, { useState, useEffect } from "react";
import landscape from "../img/Login/landscape.jpg";
import validator from "validator";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");

  // Email validation
  const validateEmail = (e) => {
    var emailInput = e.target.value;

    if (validator.isEmail(emailInput)) {
      setEmailError("");
      setEmail(emailInput);
    } else {
      setEmailError("Please enter a valid email");
      setEmail("");
    }
  };

  // Password validation
  const validatePassword = (e) => {
    var password = e.target.value;
    setPassword(password);
  };

  useEffect(() => {
    console.log(email);
  });

  return (
    <div id="Login">
      <div className="col-1">
        <div className="welcome-text">
          <p>Welcome back!</p>
          <p>Nice to see you again, we hope you are doing great</p>
        </div>
        <div className="welcome-img">
          <img src={landscape} alt=""></img>
        </div>
      </div>
      <div className="col-2">
        <div className="user-login-text">
          <h2>
            <span>User</span>
          </h2>
          <h2> login</h2>
        </div>

        <label>Email</label>
        <input
          className="user-input"
          type="email"
          id="email"
          placeholder="Insert email here"
          onChange={(e) => validateEmail(e)}
        ></input>
        <p className="email-error">{emailError}</p>

        <label>Password</label>
        <input
          className="user-input"
          type="password"
          id="password"
          placeholder="Insert password here"
          onChange={(e) => validatePassword(e)}
        ></input>

        <div className="user-options">
          <div>
            <input
              type="checkbox"
              id="rememberme"
              placeholder="Insert password here"
            ></input>
            <label>Remember me?</label>
          </div>

          <p>Forgot password?</p>
        </div>

        <div className="button-container">
          <button className="cta-button">Login</button>
        </div>
      </div>
    </div>
  );
}
