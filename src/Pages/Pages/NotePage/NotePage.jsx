import React, { useEffect } from "react";
import { useAuth } from "../../../context/auth-context";
import "./NotePage.css";

export function NotePage() {
  const { loggedIn, setLoggedIn } = useAuth();
  console.log(loggedIn);
  return (
    <>
      <div>
        <h1>This is a Note Page</h1>
      </div>
    </>
  );
}
