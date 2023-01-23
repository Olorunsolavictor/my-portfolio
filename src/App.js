import { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import ProjectDetails from "./components/ProjectDetails";
import ShopOut from "./components/ShopOut";
import { Route, Routes } from "react-router-dom";
import { ReactComponent as LoadingIcon } from "./assets/loading-icon.svg";
const LandingPage = lazy(() => import("./components/LandingPage"));

function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="flex justify-center mt-60">
            <LoadingIcon className="suspense-loading-icon" />
          </div>
        }
      >
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/projectdetails" element={<ProjectDetails />} />
          <Route path="/shopout" element={<ShopOut />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
