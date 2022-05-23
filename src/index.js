import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { makeServer } from "./server";
import { AuthProvider } from "./context/auth-context";
import { NoteProvider } from "./context/note-context";

// Call make Server
makeServer();

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <NoteProvider>
        <AuthProvider>
          <App />
        </AuthProvider>
      </NoteProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById("root")
);
