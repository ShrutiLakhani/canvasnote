import axios from "axios";
import react from "react";
import { createContext, useContext, useState } from "react";

const ArchiveContext = createContext();

const ArchiveProvider = ({ children }) => {
  const [archiveNote, setArchiveNote] = useState([]);

  const addArchiveNote = async (note) => {
    const token = localStorage.getItem("userToken");
    try {
      const response = await axios.post(
        "/api/notes/archive/${noteId}",
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

  return (
    <ArchiveContext.Provider
      value={{ archiveNote, setArchiveNote, addArchiveNote }}
    >
      {children}
    </ArchiveContext.Provider>
  );
};
const useArchive = () => useContext(ArchiveContext);
export { useArchive, ArchiveProvider };
