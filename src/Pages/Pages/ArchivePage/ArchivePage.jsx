import { Sidebar, ArchiveNote } from "../../../Components";
import "./ArchivePage.css";
import { useTrash } from "../../../context/trash-context";
import { useNote } from "../../../context/note-context";
import { useArchive } from "../../../context/archive-context";
export function ArchivePage() {
  const { trashNote, setTrashNote } = useTrash();
  const { notes, setNotes } = useNote();
  const { archiveNote, setArchiveNote } = useArchive();
  console.log("Comes");
  return (
    <div className="style-notepage">
      <div className="note-content-container">
        <Sidebar />
        <div className="archive-note-container">
          {archiveNote.length > 0 ? "" : <h3>Archived Notes!!!</h3>}
          <div className="note-list">
            {archiveNote.map((item) => (
              <ArchiveNote key={item._id} {...item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
