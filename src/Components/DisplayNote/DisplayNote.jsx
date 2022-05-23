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
  } = item;
  const handleAddtoTrash = (id) => {
    console.log("aana padega");
    console.log(notes);
    setNotes(notes.filter((note) => note._id !== id));
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
          <button>
            <span class="material-symbols-outlined">edit_note</span>
          </button>
        </div>
      </div>
    </>
  );
}
