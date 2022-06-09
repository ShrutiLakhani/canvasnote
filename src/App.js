import "./App.css";
import { Navbar } from "./Components/index.js";
import { Routes, Route, Link } from "react-router-dom";
import { LoginPage, SignupPage, HomePage, NotePage } from "./Pages/Pages/index";
function App() {
  return (
    <>
      <div>
        <Navbar />
        <Routes>
          <Route path="login" element={<LoginPage />} />
          <Route path="signup" element={<SignupPage />} />
          <Route path="/" element={<HomePage />} />
          <Route path="note" element={<NotePage />} />
        </Routes>
      </div>
    </>
  );
}
export default App;
