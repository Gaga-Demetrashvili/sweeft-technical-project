import { Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/LandingPage";
import { UserInfo } from "./pages/UserInfo";
import "./App.styles.css";

function App() {
  return <Routes>
    <Route path="Vagabond169.github.io/sweeft-technical-project" element={<LandingPage />} />
    <Route path="Vagabond169.github.io/sweeft-technical-project/user/:userId" element={<UserInfo />} />
  </Routes>
}

export default App;
