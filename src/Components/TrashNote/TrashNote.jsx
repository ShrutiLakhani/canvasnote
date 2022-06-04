import "./TrashNote.css";
import react from "react";
import { useState } from "react";
import { ColorPalette } from "../ColorPalette/ColorPalette";
import { useNote } from "../../context/note-context";
import { useTrash } from "../../context/trash-context";

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
  console.log("item", item);
  const { trashNote, setTrashNote, restoreTrash } = useTrash();
  const { notes, setNotes, deleteNote } = useNote();
  //   const [editCard, setEditCard] = useState({
  //     title: title,
  //     description: description,
  //     tag: tag,
  //     priority: priority,
  //     date: date,
  //     selectedBackgroundColor: selectedBackgroundColor,
  //   });

  const removeFromTrash = (id) => {
    console.log("Trash here");
    setTrashNote(trashNote.filter((note) => note._id !== id));
  };

  const restoreFromTrash = (id, note) => {
    setTrashNote(trashNote.filter((note) => note._id !== id));
    setNotes([...notes, note]);
  };

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
      {/* </div> */}
    </>
  );
}
