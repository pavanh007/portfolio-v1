import Navbar from "./components/Navbar";
import About from "./components/About"
import Project from "./components/Projects";
import Experience from "./components/Experience";  
import Contact from "./components/Contact";
import Work from "./components/Work";  

function App() {
  return (
    <>
      <Navbar />
      <About />
      <Work />
      <Project />
      <Experience />
      <Contact />
    </>
  );
}

export default App
