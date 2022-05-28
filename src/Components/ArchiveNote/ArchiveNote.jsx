import "./ArchiveNote.css";
import react from "react";
import { useState } from "react";
import { ColorPalette } from "../ColorPalette/ColorPalette";
import { useNote } from "../../context/note-context";
import { useTrash } from "../../context/trash-context";
import { useArchive } from "../../context/archive-context";

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
  console.log("item", item);
  const { trashNote, setTrashNote, restoreTrash } = useTrash();
  const { notes, setNotes, deleteNote } = useNote();
  const { archiveNote, setArchiveNote } = useArchive();
  //   const [editCard, setEditCard] = useState({
  //     title: title,
  //     description: description,
  //     tag: tag,
  //     priority: priority,
  //     date: date,
  //     selectedBackgroundColor: selectedBackgroundColor,
  //   });

  //   const removeFromTrash = (id) => {
  //     console.log("Trash here");
  //     setTrashNote(trashNote.filter((note) => note._id !== id));
  //   };

  //   const restoreFromTrash = (id, note) => {
  //     setTrashNote(trashNote.filter((note) => note._id !== id));
  //     setNotes([...notes, note]);
  //   };
  const handleAddtoTrash = (id, item) => {
    console.log("Hey there");
    setTrashNote([...trashNote, item]);
    setArchiveNote(archiveNote.filter((note) => note._id !== id));
  };
  const restoreFromArchive = (id, item) => {
    console.log("I am here too");
    setArchiveNote(archiveNote.filter((note) => note._id !== id));
    setNotes([...notes, item]);
  };

  //   const handleEdit = (editData) => {
  //     console.log("I am here too");
  //     setEditNoteValue(editData);
  //     setEditAddNote(false);
  //     setEditDisplayNote(true);
  //   };
  return (
    <>
      <div
        className="display-note"
        style={{ backgroundColor: selectedBackgroundColor }}
        key={_id}
      >
        <div
          //       className="style-notecard-area"
          //       style={{ backgroundColor: selectedBackgroundColor }}
          //     >
          div
          className="note-input-container"
        >
          <h5 className="note-title">{title}</h5>
          <p className="note-description">{description}</p>
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
            {/* <span
              class="material-symbols-outlined"
              onClick={() => handleEdit(item)}
            >
              edit_note
            </span> */}
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
