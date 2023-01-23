import { lazy, Suspense } from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import { Route, Routes } from "react-router-dom";
import { ReactComponent as LoadingIcon } from "./assets/loading-icon.svg";
const LandingPage = lazy(() => import("./components/LandingPage"));
const ProjectDetails = lazy(() => import("./components/ProjectDetails"));
const ShopOut = lazy(() => import("./components/ShopOut"));

function App() {
  return (
    <BrowserRouter>
      <Suspense
        fallback={
          <div className="flex flex-col items-center justify-center mt-60">
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
