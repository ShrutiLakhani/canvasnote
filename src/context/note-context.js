import react from "react";
import axios from "axios";
import { useContext, createContext, useState } from "react";
const NoteContext = createContext();

const NoteProvider = ({ children }) => {
  const [notes, setNotes] = useState([]);
  const addNote = async (noteText) => {
    const token = localStorage.getItem("userToken");
    try {
      const response = await axios.post(
        "api/notes",
        {
          note: noteText,
        },
        { headers: { authorization: token } }
      );
      if (response.status === 201) {
        const {
          data: { notes },
        } = response;
        console.log(response);
        setNotes(notes);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const deleteNote = async (noteId) => {
    const token = localStorage.getItem("userToken");
    try {
      const response = await axios.delete("api/notes/${noteId}", {
        headers: { authorization: token },
      });
      if (response.status === 200) {
        const {
          data: { notes },
        } = response;
        setNotes(notes);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  const editNote = async (noteId, note) => {
    const token = localStorage.getItem("userToken");
    console.log("note", note);
    console.log("noteId", noteId);
    try {
      const response = await axios.post(
        `api/notes/${noteId}`,
        { note: note },
        {
          headers: { authorization: token },
        }
      );
      if (response.status === 201) {
        const {
          data: { notes },
        } = response;
        setNotes(notes);
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <NoteContext.Provider
      value={{ notes, setNotes, addNote, deleteNote, editNote }}
    >
      {children}
    </NoteContext.Provider>
  );
};
const useNote = () => useContext(NoteContext);
export { useNote, NoteProvider };
