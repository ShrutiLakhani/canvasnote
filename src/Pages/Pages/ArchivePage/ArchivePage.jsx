import { Sidebar, ArchiveNote } from "../../../Components";
import "./ArchivePage.css";
import { useTrash, useNote, useArchive } from "../../../context/context";
export function ArchivePage() {
  const { trashNote, setTrashNote } = useTrash();
  const { notes, setNotes } = useNote();
  const { archiveNote, setArchiveNote } = useArchive();
  return (
    <div className="style-notepage">
      <div className="note-content-container">
        <Sidebar />
        <div className="archive-note-container">
          {archiveNote.length > 0 ? (
            ""
          ) : (
            <h2 className="archive-page-title">No Archived Notes!!!</h2>
          )}
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
