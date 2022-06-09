import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./server";
import { AuthProvider } from "./context/auth-context";
import { NoteProvider } from "./context/note-context";
import { TrashProvider } from "./context/trash-context";
import { ArchiveProvider } from "./context/archive-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <TrashProvider>
        <ArchiveProvider>
          <NoteProvider>
            <AuthProvider>
              <App />
            </AuthProvider>
          </NoteProvider>
        </ArchiveProvider>
      </TrashProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
