import react from "react";
import { useState } from "react";
import { getNotes, useFilter } from "../../../context/filter-context";
import {
  Sidebar,
  Navbar,
  DisplayNote,
  NoteCard,
  EditNote,
  TrashNote,
  SortBy,
  Filter,
} from "../../../Components";
import "./NotePage.css";
import { useNote } from "../../../context/note-context";
import { Link } from "react-router-dom";

export function NotePage() {
  const { filterState } = useFilter();
  const [editAddNote, setEditAddNote] = useState(false);
  const [editDisplayNote, setEditDisplayNote] = useState(false);
  const { notes, setNotes } = useNote();
  const [editNoteValue, setEditNoteValue] = useState({});
  const finalNotesList = getNotes(filterState, notes);
  return (
    <>
      <div className="style-notepage">
        <div className="divider-underline"></div>
        <div className="note-content-container">
          <div>
            <Sidebar />
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
          <div className="note-edit-container">
            {editDisplayNote ? (
              <EditNote
                setEditDisplayNote={setEditDisplayNote}
                {...editNoteValue}
              />
            ) : (
              ""
            )}
            {editAddNote ? <NoteCard setEditAddNote={setEditAddNote} /> : ""}
          </div>
        </div>
        {notes.length !== 0 && (
          <div className="sort-filter">
            <SortBy />
            <Filter />
          </div>
        )}
        <div className="note-list">
          {finalNotesList.map((item) => (
            <DisplayNote
              {...item}
              key={item._id}
              editNoteValue={editNoteValue}
              setEditNoteValue={setEditNoteValue}
              setEditAddNote={setEditAddNote}
              setEditDisplayNote={setEditDisplayNote}
            />
          ))}
        </div>
      </div>
    </>
  );
}
