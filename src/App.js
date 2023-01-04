import "./App.css";
import Home from "./components/Home";
import NewNavBar from "./components/NewNavBar";
import About from "./components/about/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { ContactMe } from "./components/ContactMe";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="md:bg-[#f7f7f7] sm:bg-white h-screen flex flex-col  items-center">
        <NewNavBar />
        <div className="md:bg-[#f7f7f7] sm:bg-white">
          <Home />
        </div>
        <div className="bg-white flex justify-center items-center">
          <About />
        </div>
        <div className=" bg-[#f7f7f7]   w-full ">
          <Skills />
        </div>
        <div className="  w-full flex  items-center justify-center h-auto  ">
          <Projects />
        </div>
        <div
          className=" bg-[#f7f7f7] w-full flex items-center justify-center h-[900px] "
          id="contactMe"
        >
          <ContactMe />
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
