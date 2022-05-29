import react from "react";
import { createContext, useContext, useState } from "react";

const TrashContext = createContext();

const TrashProvider = ({ children }) => {
  const [trashNote, setTrashNote] = useState([]);
  const restoreTrash = async (noteId) => {
    const token = localStorage.getItem("userToken");
    try {
      const response = await axios.post(
        "/api/trash/restore/${noteId}",
        {
          note: noteText,
        },
        { headers: { authorization: token } }
      );
      if (response.status === 201) {
        const {
          data: { notes },
        } = response;
        setNotes(notes);
      }
    } catch (error) {
      console.log("error", error);
    }
  };

  return (
    <TrashContext.Provider value={{ trashNote, setTrashNote, restoreTrash }}>
      {children}
    </TrashContext.Provider>
  );
};
const useTrash = () => useContext(TrashContext);
export { useTrash, TrashProvider };
