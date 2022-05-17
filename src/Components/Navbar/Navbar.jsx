import React from "react";
import "./Navbar.css";
import { Routes, Route, Link, Navigate, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";

export function Navbar() {
  const navigate = useNavigate();
  const { loggedIn, setLoggedIn } = useAuth();

  const logoutHandler = () => {
    localStorage.removeItem("userToken");
    setLoggedIn(false);
    navigate("/");
  };

  return (
    <div>
      <header className="header-outer">
        <div className="header-inner">
          <section className="ecomm-navbar">
            <Link to="/" className="ecomm-logo-img"></Link>
            <div>
              <small>CanvaNote</small>
            </div>
            <nav className="nav-links">
              {loggedIn ? (
                <Link to="/" onClick={() => setLoggedIn(false)}>
                  Logout
                </Link>
              ) : (
                <div className="nav-action-buttons">
                  <Link to="/login"> Login </Link>
                  <Link to="/signup"> Sign Up </Link>
                </div>
              )}
            </nav>
          </section>
        </div>
      </header>
    </div>
  );
}
