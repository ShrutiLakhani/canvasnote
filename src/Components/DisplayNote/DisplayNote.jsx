import "./DisplayNote.css";
import { useNote } from "../../context/note-context";
export function DisplayNote(item) {
  const { notes, setNotes, deleteNote } = useNote();
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
  const handleAddtoTrash = (id) => {
    setNotes(notes.filter((note) => note._id !== id));
  };
  const handleEdit = (editData) => {
    setEditNoteValue(editData);
    setEditAddNote(false);
    setEditDisplayNote(true);
  };
  return (
    <>
      <div
        className="display-note"
        style={{ backgroundColor: selectedBackgroundColor }}
        key={_id}
      >
        <div className="note-input-container">
          <h5 className="note-title">{title}</h5>
          <p className="note-description">{description}</p>
        </div>
        <div className="note-card-bottom-section">
          <div className="dropdown-section">
            <div className="select-dropdown-label">{tag}</div>
            <div className="select-dropdown-priority">{priority}</div>
            {/* <div>{date}</div> */}
          </div>
          <div className="btn-section">
            <span class="material-symbols-outlined">archive</span>
            <span
              class="material-symbols-outlined"
              onClick={() => handleAddtoTrash(_id)}
            >
              delete
            </span>
            <span
              class="material-symbols-outlined"
              onClick={() => handleEdit(item)}
            >
              edit_note
            </span>
          </div>
        </div>
      </div>
    </>
  );
}
