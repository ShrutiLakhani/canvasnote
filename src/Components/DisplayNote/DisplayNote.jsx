import "./DisplayNote.css";
import { useNote } from "../../context/note-context";
import { useTrash } from "../../context/trash-context";
import { useArchive } from "../../context/archive-context";
export function DisplayNote(item) {
  const { notes, setNotes, deleteNote } = useNote();
  const { trashNote, setTrashNote } = useTrash();
  const { archiveNote, setArchiveNote, addArchiveNote } = useArchive();
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
  const handleAddtoTrash = (id, item) => {
    setTrashNote([...trashNote, item]);
    setNotes(notes.filter((note) => note._id !== id));
  };
  const handleEdit = (editData) => {
    setEditNoteValue(editData);
    setEditAddNote(false);
    setEditDisplayNote(true);
  };
  const addtoArchive = (id, item) => {
    setArchiveNote([...archiveNote, item]);
    setNotes(notes.filter((note) => note._id !== id));
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
          </div>
          <div className="btn-section">
            <span
              class="material-symbols-outlined"
              onClick={(e) => addtoArchive(_id, item)}
            >
              archive
            </span>
            <span
              class="material-symbols-outlined"
              onClick={() => handleAddtoTrash(_id, item)}
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
