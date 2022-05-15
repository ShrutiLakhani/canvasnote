import React from "react";
import "./Navbar.css";
import { Routes, Route, Link } from "react-router-dom";
export function Navbar() {
  console.log("Comes");
  return (
    <nav>
      <header className="header-outer">
        <div className="header-inner">
          <section className="ecomm-navbar">
            <Link to="/" className="ecomm-logo-img"></Link>
            <div>
              <input
                className="nav-input-container fa"
                placeholder="Search"
              ></input>
            </div>
            <div className="nav-action-buttons">
              <div className="dropdown">
                <Link to="/signup">
                  <i className="fas fa-user fa-lg"></i>
                </Link>
                <div className="dropdown-content">
                  <Link to="/cart">Orders</Link>
                  <Link to="/wishlist">Wishlist</Link>
                  <a href="#">Giftcards</a>
                  <a href="#">Contact Us</a>
                </div>
              </div>
              <div className="icon-ecomm">
                <Link to="/wishlist">
                  <i className="far fa-heart fa-lg"></i>
                </Link>
              </div>
              <div className="icon-ecomm">
                <Link to="/cart">
                  <span className="material-icons">shopping_bag</span>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </header>
    </nav>
  );
}
