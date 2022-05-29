import "./EditNote.css";
import react from "react";
import { useState } from "react";
import { ColorPalette } from "../ColorPalette/ColorPalette";
import { useNote } from "../../context/note-context";

export function EditNote(item, edit) {
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
  console.log("id", _id);
  const { editNote } = useNote();
  const [editCard, setEditCard] = useState({
    title: title,
    description: description,
    tag: tag,
    priority: priority,
    date: date,
    selectedBackgroundColor: selectedBackgroundColor,
  });

  const handleEdit = (e, editData, id) => {
    editNote(id, editData);
    setEditDisplayNote(false);
  };

  return (
    <>
      <div
        className="style-notecard-area"
        style={{ backgroundColor: selectedBackgroundColor }}
      >
        <div className="container-notecard">
          <textarea
            type="text"
            row="1"
            value={editCard.title}
            className="style-notecard-title"
            placeholder="Title"
            onChange={(e) => {
              setEditCard({ ...editCard, title: e.target.value });
            }}
          ></textarea>
          <textarea
            type="text"
            row="2"
            value={editCard.description}
            className="style-notecard-body"
            placeholder="Add a note..."
            onChange={(e) => {
              setEditCard({ ...editCard, description: e.target.value });
            }}
          ></textarea>
          <div className="card-bottom-section">
            <select
              ClassName="select-dropdown-label"
              value={editCard.tag}
              onChange={(e) => {
                setEditCard({ ...editCard, tag: e.target.value });
              }}
            >
              <option value="Label">Select Labels</option>
              <option value="Home">Home</option>
              <option value="Work">Work</option>
              <option value="Personal">Personal</option>
              <option value="In Progress">in Progress</option>
              <option value="Completed">Completed</option>
            </select>
            <select
              ClassName="select-dropdown-priority"
              value={editCard.priority}
              onChange={(e) => {
                setEditCard({ ...editCard, priority: e.target.value });
              }}
            >
              <option value="">Select Priority</option>
              <option value="High">High</option>
              <option value="Medium">Medium</option>
              <option value="Low">Low</option>
            </select>

            <ColorPalette
              noteCard={editCard}
              setNoteCard={setEditCard}
              edit={edit}
            />
            <button
              className="primary-button-float-icon add-note-btn"
              onClick={(e) => handleEdit(e, editCard, _id)}
            >
              Done
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
