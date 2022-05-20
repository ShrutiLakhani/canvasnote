import react from "react";
import { useState } from "react";
import { Sidebar, Navbar, NoteCard } from "../../../Components";
import "./NotePage.css";

export function NotePage() {
  console.log("HI");

  return (
    <div className="style-notepage">
      <Sidebar />
      <NoteCard />
    </div>
  );
}
