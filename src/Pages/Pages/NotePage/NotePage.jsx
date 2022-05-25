import react from "react";
import { useState } from "react";
import {
  Sidebar,
  Navbar,
  DisplayNote,
  NoteCard,
  EditNote,
} from "../../../Components";
import "./NotePage.css";
import { useNote } from "../../../context/note-context";
import { Link } from "react-router-dom";

export function NotePage() {
  const [editAddNote, setEditAddNote] = useState(false);
  const [editDisplayNote, setEditDisplayNote] = useState(false);
  const { notes, setNotes } = useNote();
  const [editNoteValue, setEditNoteValue] = useState({});
  console.log("notes", notes);
  console.log("editDisplayNote", editDisplayNote);
  console.log(editAddNote);
  console.log("editNoteValue", editNoteValue);
  return (
    <>
      <div className="style-notepage">
        <Sidebar />
        <h2>Your Notes</h2>
        {editDisplayNote ? (
          <EditNote
            setEditDisplayNote={setEditDisplayNote}
            {...editNoteValue}
          />
        ) : (
          ""
        )}
        {editAddNote ? <NoteCard setEditAddNote={setEditAddNote} /> : ""}
        <div>
          {notes.map((item) => (
            <DisplayNote
              {...item}
              editNoteValue={editNoteValue}
              setEditNoteValue={setEditNoteValue}
              setEditAddNote={setEditAddNote}
              setEditDisplayNote={setEditDisplayNote}
            />
          ))}
        </div>
        <button
          className="btn-primary btn-note"
          onClick={() => {
            setEditAddNote(true);
            setEditDisplayNote(false);
          }}
        >
          <Link to="/note">ADD NOTE</Link>
        </button>
      </div>
    </>
  );
}
