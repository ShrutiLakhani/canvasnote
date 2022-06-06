import "./TrashNote.css";
import react from "react";
import { useState } from "react";
import { ColorPalette } from "../ColorPalette/ColorPalette";
import { useNote, useTrash } from "../../context/context";

export function TrashNote(item) {
  const {
    _id,
    title,
    description,
    tag,
    priority,
    selectedBackgroundColor,
    date,
    setEditDisplayNote,
    setEditAddNote,
  } = item;
  const { trashNote, setTrashNote, restoreTrash } = useTrash();
  const { notes, setNotes, deleteNote } = useNote();
  const removeFromTrash = (id) => {
    setTrashNote(trashNote.filter((note) => note._id !== id));
  };

  const restoreFromTrash = (id, note) => {
    setTrashNote(trashNote.filter((note) => note._id !== id));
    setNotes([...notes, note]);
  };

  return (
    <>
      <div
        className="trash-display-note"
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
              onClick={(e) => restoreFromTrash(_id, item)}
            >
              restore_from_trash
            </span>
            <span
              class="material-symbols-outlined"
              onClick={(e) => removeFromTrash(_id)}
            >
              delete_forever
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
