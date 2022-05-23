import react from "react";
import { useState } from "react";
import { Sidebar, Navbar, DisplayNote, NoteCard } from "../../../Components";
import "./NotePage.css";
import { useNote } from "../../../context/note-context";

export function NotePage() {
  const { notes, setNotes } = useNote();
  console.log(notes);
  return (
    <>
      <div className="style-notepage">
        <Sidebar />
        <NoteCard />
        <div>
          {notes.map((item) => (
            <DisplayNote {...item} />
          ))}
        </div>
      </div>
    </>
  );
}
