import { Sidebar, TrashNote } from "../../../Components";
import "./TrashPage.css";
import { useTrash } from "../../../context/trash-context";
export function TrashPage() {
  const { trashNote, setTrashNote } = useTrash();
  console.log("Comes");
  return (
    <div className="style-notepage">
      <div className="note-content-container">
        <Sidebar />
        <div className="note-trash-container">
          {trashNote.length > 0 ? "" : <h3>Trash is Empty!!!</h3>}
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
