import react from "react";
import { useState } from "react";
import "./NoteCard.css";

export function NoteCard() {
  return (
    <>
      <div className="style-notecard-area">
        <textarea
          type="text"
          className="style-notecard-title"
          placeholder="Title"
        ></textarea>

        <textarea
          type="text"
          className="style-notecard-body"
          placeholder="Add a note..."
        ></textarea>

        <div className="card-bottom-section">
          <select ClassName="select-dropdown-label">
            <option value="Label">Select Labels</option>
            <option value="Home">Home</option>
            <option value="Work">Work</option>
            <option value="Personal">Personal</option>
            <option value="In Progress">in Progress</option>
            <option value="Completed">Completed</option>
          </select>
          <select ClassName="select-dropdown-priority">
            <option value="">Select Priority</option>
            <option value="High">High</option>
            <option value="Medium">Medium</option>
            <option value="Low">Low</option>
          </select>
        </div>
        <button className="primary-button-float-icon add-note-btn">+</button>
      </div>
    </>
  );
}
