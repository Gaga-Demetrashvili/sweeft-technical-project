import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import "./App.styles.css";
import { UserPage } from "./pages/UserPage";

function App() {
  return <Routes>
    <Route path="/" element={<LandingPage />} />
    <Route path="user/:userId" element={<UserPage />} />
  </Routes>
}

export default App;
