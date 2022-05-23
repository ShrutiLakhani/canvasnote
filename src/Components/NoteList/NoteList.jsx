import { NoteCard } from "../NoteCard/NoteCard";
import { DisplayNote } from "../DisplayNote/DisplayNote";
export function NoteList({ notes, handleAddNote }) {
  return (
    <div className="note-list">
      {notes.map((note) => (
        <DisplayNote
          id={note.id}
          title={note.title}
          description={note.description}
        />
      ))}
      <NoteCard handleAddNote={handleAddNote} />
    </div>
  );
}
