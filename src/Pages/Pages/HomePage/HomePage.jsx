import React, { useEffect } from "react";
import { Sidebar } from "../../../Components";
import { useAuth } from "../../../context/auth-context";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import emptyNote from "../../../assets/Images/no-notes.svg";
import "./HomePage.css";
export function HomePage() {
  const { loggedIn, setLoggedIn } = useAuth();
  return (
    <>
      <div>
        <Sidebar />
        <div className="hero-img-home-container">
          <img className="hero-img-home" src={emptyNote} alt="blank-Img" />
        </div>
        <div className="overlay-text-home">
          <p>Create Notes</p>
        </div>
      </div>
      <button className="home-btn-primary btn-note-home">
        <Link to="/note">CREATE NOTE</Link>
      </button>
    </>
  );
}
