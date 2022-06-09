import "./Sidebar.css";
import React from "react";
import { Link } from "react-router-dom";

export const Sidebar = () => {
  return (
    <aside>
      <ul>
        <li className="style-list-items">
          <Link to="/home" className="style-list-items-icon">
            <span class="material-symbols-outlined">home</span>
            <span>Home</span>
          </Link>
        </li>
        <li className="style-list-items">
          <Link to="/label" className="style-list-items-icon">
            <span class="material-symbols-outlined">label</span>
            <span>Labels</span>
          </Link>
        </li>
        <li className="style-list-items">
          <Link to="/archive" className="style-list-items-icon">
            <span class="material-symbols-outlined">archive</span>
            <span>Archive</span>
          </Link>
        </li>
        <li className="style-list-items">
          <Link to="/trash" className="style-list-items-icon">
            <span class="material-symbols-outlined">delete</span>
            <span>Trash</span>
          </Link>
        </li>
      </ul>
    </aside>
  );
};
