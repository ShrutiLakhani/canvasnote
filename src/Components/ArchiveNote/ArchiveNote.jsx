import "./ArchiveNote.css";
import react from "react";
import { useState } from "react";
import { ColorPalette } from "../ColorPalette/ColorPalette";
import { useNote, useTrash, useArchive } from "../../context/context";

export function ArchiveNote(item) {
  const {
    _id,
    title,
    description,
    tag,
    priority,
    selectedBackgroundColor,
    date,
    editNoteValue,
    setEditNoteValue,
    setEditAddNote,
    setEditDisplayNote,
  } = item;
  const { trashNote, setTrashNote, restoreTrash } = useTrash();
  const { notes, setNotes, deleteNote } = useNote();
  const { archiveNote, setArchiveNote } = useArchive();
  const handleAddtoTrash = (id, item) => {
    setTrashNote([...trashNote, item]);
    setArchiveNote(archiveNote.filter((note) => note._id !== id));
  };
  const restoreFromArchive = (id, item) => {
    setArchiveNote(archiveNote.filter((note) => note._id !== id));
    setNotes([...notes, item]);
  };
  return (
    <>
      <div
        className="archive-display-note"
        style={{ backgroundColor: selectedBackgroundColor }}
        key={_id}
      >
        <div className="note-input-container">
          <h5 className="note-title">{title}</h5>
          <p
            className="note-description"
            dangerouslySetInnerHTML={{ __html: description }}
          ></p>
        </div>
        <div className="note-card-bottom-section">
          <div className="btn-section">
            <span
              class="material-symbols-outlined"
              onClick={() => handleAddtoTrash(_id, item)}
            >
              delete
            </span>
            <span
              class="material-symbols-outlined"
              onClick={(e) => restoreFromArchive(_id, item)}
            >
              unarchive
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
