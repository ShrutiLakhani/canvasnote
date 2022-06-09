import "./App.css";
import { Navbar } from "./Components/index.js";
import { Routes, Route, Link } from "react-router-dom";
import {
  LoginPage,
  SignupPage,
  HomePage,
  LandingPage,
  NotePage,
  ArchivePage,
  TrashPage,
} from "./Pages/Pages/index";
function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="home" element={<HomePage />} />
          <Route path="note" element={<NotePage />} />
          <Route path="archive" element={<ArchivePage />} />
          <Route path="trash" element={<TrashPage />} />
        </Routes>
      </div>
    </>
  );
}
export default App;
