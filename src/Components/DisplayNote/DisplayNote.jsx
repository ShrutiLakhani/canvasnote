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
  console.log("display-id", _id);
  const handleAddtoTrash = (id) => {
    console.log("aana padega");
    console.log("editNoteValue", editNoteValue);
    setNotes(notes.filter((note) => note._id !== id));
  };
  const handleEdit = (editData) => {
    console.log("editData", editData);
    console.log("here it comes");
    console.log("editNoteValue", editNoteValue);
    setEditNoteValue(editData);
    console.log("editData", editData);
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
        <div className="input-container">
          <h5>{title}</h5>
          <p>{description}</p>
        </div>
        <div className="card-bottom-section">
          <div className="select-dropdown-label">{tag}</div>
          <div className="select-dropdown-priority">{priority}</div>
          <div>{date}</div>
        </div>
        <div>
          <button>
            <span class="material-symbols-outlined">archive</span>
          </button>
          <button onClick={() => handleAddtoTrash(_id)}>
            <span class="material-symbols-outlined">delete</span>
          </button>
          <button onClick={() => handleEdit(item)}>
            <span class="material-symbols-outlined">edit_note</span>
          </button>
        </div>
      </div>
    </>
  );
}
