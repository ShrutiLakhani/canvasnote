import { Sidebar, TrashNote } from "../../../Components";
import "./TrashPage.css";
import { useTrash } from "../../../context/context";
export function TrashPage() {
  const { trashNote, setTrashNote } = useTrash();
  return (
    <div className="style-notepage">
      <div className="note-content-container">
        <Sidebar />
        <div className="note-trash-container">
          {trashNote.length > 0 ? (
            ""
          ) : (
            <h2 className="trash-page-title">Trash Empty!!!</h2>
          )}
          <div className="note-list">
            {trashNote.map((item) => (
              <TrashNote key={item._id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
