import react from "react";
import { useState } from "react";
import { Sidebar, Navbar, NoteCard } from "../../../Components";
import "./NotePage.css";

export function NotePage() {
  return (
    <div className="style-notepage">
      <Sidebar />
      {/* <div className="container-input-notes"> */}
      <NoteCard />
      {/* </div> */}
    </div>
  );
}
