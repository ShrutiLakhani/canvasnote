import React from "react";
import "./Navbar.css";
import { Routes, Route, Link } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
export function Navbar() {
  const { loggedIn, setLoggedIn } = useAuth();
  console.log("Comes");
  return (
    <nav>
      <header className="header-outer">
        <div className="header-inner">
          <section className="ecomm-navbar">
            <Link to="/" className="ecomm-logo-img"></Link>
            <div>
              <small>CanvaNote</small>
            </div>
            <nav className="nav-links">
              {loggedIn ? (
                <Link to="/" onClick={handleLogin}>
                  {" "}
                  Logout{" "}
                </Link>
              ) : (
                <div className="auth-opts">
                  <Link to="/login"> Login </Link>
                  <Link to="/signup"> Sign Up </Link>
                </div>
              )}
            </nav>
          </section>
        </div>
      </header>
    </nav>
  );
}
