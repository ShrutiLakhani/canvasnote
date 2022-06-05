import "./EditNote.css";
import react from "react";
import { useState, useEffect } from "react";
import { ColorPalette } from "../ColorPalette/ColorPalette";
import { useNote } from "../../context/note-context";
import ReactQuill from "react-quill";

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
  const { editNote } = useNote();
  const [editCard, setEditCard] = useState({
    title: title,
    description: description,
    tag: tag,
    priority: priority,
    date: date,
    selectedBackgroundColor: selectedBackgroundColor,
  });
  const [body, setBody] = useState("");
  const updateInputCardDetails = () => {
    setEditCard({ ...editCard, description: body });
  };

  useEffect(() => {
    updateInputCardDetails();
  }, [body]);

  const handleEdit = (e, editData, id) => {
    editNote(id, editData);
    setEditDisplayNote(false);
  };

  const modules = {
    toolbar: [
      [{ header: "1" }, { header: "2" }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }],
      ["link"],
      ["clean"],
    ],
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
          <ReactQuill
            theme="snow"
            value={body}
            onChange={setBody}
            placeholder="Take a note..."
            modules={modules}
          />
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
              <option value={1}>High</option>
              <option value={2}>Medium</option>
              <option value={3}>Low</option>
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
