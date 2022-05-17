import React from "react";
import "./HeroSection.css";
import heroImg from "../../assets/Images/Hero-Image-Note.svg";
export function HeroSection() {
  return (
    <div className="hero-img-container">
      <img className="hero-img" src={heroImg} alt="Hero-Image" />
    </div>
  );
}
