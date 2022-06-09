import axios from "axios";
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../context/auth-context";
import "./LoginPage.css";

export function LoginPage() {
  const navigate = useNavigate();
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [loginError, setLoginError] = useState("");
  const { loggedIn, setLoggedIn } = useAuth();

  const testUser = {
    email: "batmanmarvel@gmail.com",
    password: "batmanMarvel123",
  };

  const setUserData = (name) => {
    return ({ target: { value } }) => {
      setLoginData((oldValues) => ({ ...oldValues, [name]: value }));
    };
  };
  const handleLogin = (e) => {
    e.preventDefault();
    submitLoginData(loginData);
  };

  const submitLoginData = async (loginData) => {
    try {
      const response = await axios.post("/api/auth/login", loginData);
      if (response.status === 200) {
        setLoggedIn(true);
        const userToken = response.data.encodedToken;
        localStorage.setItem("userToken", userToken);
        navigate("/home");
      }
    } catch (error) {
      setLoginError("An error occurred.");
      console.log("error:", error.response.error);
    }
  };

  const guestLogin = (e) => {
    e.preventDefault();
    submitLoginData(testUser);
  };

  return (
    <main className="signup-wrapper">
      <section className="login-page-bottom-container">
        <div className="login-container">
          <form className="login-form" onSubmit={handleLogin}>
            <h1>Login</h1>
            <div>
              <label className="input-label">Email address</label>
              <input
                className="form-input-container"
                type="text"
                placeholder="xyz@gmail.com"
                value={loginData.email}
                onChange={setUserData("email")}
              />
            </div>
            <div>
              <label className="input-label">Password</label>
              <input
                className="form-input-container"
                type="password"
                placeholder="**********"
                value={loginData.password}
                onChange={setUserData("password")}
              />
            </div>
            <div className="forgot-pswrd-link">
              <a href="#">Forgot Password?</a>
            </div>
            <p>
              <input className="style-input-checkbox" type="checkbox" />{" "}
              Remember me
            </p>
            <button className="button-login-form border-style">LOGIN</button>
            <button
              className="button-login-form border-style"
              onClick={(e) => guestLogin(e)}
            >
              GUEST LOGIN
            </button>
            <Link to="/signup" className="btn-sign-up button-link">
              Create New Account <i class="fas fa-chevron-right"></i>
            </Link>
          </form>
        </div>
      </section>
    </main>
  );
}
