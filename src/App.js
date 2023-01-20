import "./App.css";
import { BrowserRouter } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import ProjectDetails from "./components/ProjectDetails";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="projectdetails" element={<ProjectDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
