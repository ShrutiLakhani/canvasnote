import react, { useState, useEffect } from "react";
import { ColorPalette } from "../ColorPalette/ColorPalette";
import "./NoteCard.css";
import { useNote } from "../../context/context";
import ReactQuill from "react-quill";
import "../../../node_modules/react-quill/dist/quill.snow.css";

export function NoteCard(item, edit, config) {
  const [editor, setEditor] = useState("");
  const { setEditAddNote } = item;
  const { notes, setNotes, addNote, deleteNote } = useNote();
  const [noteCard, setNoteCard] = useState({
    title: "",
    description: "",
    tag: "Tag",
    priority: "3",
    date: new Date().toLocaleString(),
    selectedBackgroundColor: "#D5BDCB",
  });
  const [body, setBody] = useState("");
  const updateInputCardDetails = () => {
    setNoteCard({ ...noteCard, description: body });
  };

  useEffect(() => {
    updateInputCardDetails();
  }, [body]);

  const handleAddNote = (e, value) => {
    addNote(noteCard);
    setNoteCard({ title: "", description: "", date: "", time: "", color: "" });
    setEditAddNote(false);
  };
  console.log(noteCard);
  const modules = {
    toolbar: [
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ color: [] }, { background: [] }],
      [
        { list: "ordered" },
        { list: "bullet" },
        { indent: "-1" },
        { indent: "+1" },
      ],
      ["link", "image"],
      ["clean"],
    ],
  };

  return (
    <>
      <div
        className="style-notecard-area"
        style={{ backgroundColor: noteCard.selectedBackgroundColor }}
      >
        <div className="container-notecard">
          <textarea
            type="text"
            row="1"
            value={noteCard.title}
            className="style-notecard-title"
            placeholder="Title"
            onChange={(e) => {
              setNoteCard({ ...noteCard, title: e.target.value });
            }}
          ></textarea>
          <ReactQuill
            theme="snow"
            value={body}
            className="style-notecard-body"
            onChange={setBody}
            placeholder="Take a note..."
            modules={modules}
          />
          <div className="card-bottom-section">
            <select
              ClassName="notecard-select-dropdown-label"
              value={noteCard.tag}
              onChange={(e) => {
                setNoteCard({ ...noteCard, tag: e.target.value });
              }}
            >
              <option value="Label">Select Labels</option>
              <option value="Home">Home</option>
              <option value="Work">Work</option>
              <option value="Personal">Personal</option>
              <option value="In Progress">In Progress</option>
              <option value="Completed">Completed</option>
            </select>
            <select
              ClassName="notecard-select-dropdown-priority"
              value={noteCard.priority}
              onChange={(e) => {
                setNoteCard({ ...noteCard, priority: e.target.value });
              }}
            >
              <option value="">Select Priority</option>
              <option value={1}>High</option>
              <option value={2}>Medium</option>
              <option value={3}>Low</option>
            </select>

            <ColorPalette
              noteCard={noteCard}
              setNoteCard={setNoteCard}
              edit={edit}
            />
            <button
              className="primary-button-float-icon add-note-btn"
              onClick={(e) => handleAddNote(e, noteCard)}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
