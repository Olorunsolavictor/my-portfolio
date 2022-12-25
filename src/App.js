import "./App.css";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import About from "./components/about/About";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import { ContactMe } from "./components/ContactMe";

function App() {
  return (
    <div className="bg-[#f7f7f7] h-screen flex flex-col  items-center">
      <Navbar />
      <div className="bg-[#f7f7f7]">
        <Home />
      </div>
      <div className="bg-[#2d283e] flex justify-center items-center">
        <About />
      </div>
      <div className="bg-[#f7f7f7]">
        <Skills />
      </div>
      <div className=" w-full flex items-center justify-center h-[900px]">
        <Projects />
      </div>
      <div className=" bg-[#2d283e] w-full flex items-center justify-center h-[900px]">
        <ContactMe />
      </div>
    </div>
  );
}

export default App;
