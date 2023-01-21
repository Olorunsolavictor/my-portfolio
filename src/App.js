import "./App.css";
import { BrowserRouter } from "react-router-dom";
import LandingPage from "./components/LandingPage";
import ProjectDetails from "./components/ProjectDetails";
import ShopOut from "./components/ShopOut";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/projectdetails" element={<ProjectDetails />} />
        <Route path="/shopout" element={<ShopOut />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
