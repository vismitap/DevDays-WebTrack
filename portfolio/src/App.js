import "./styles.css";
import Navbar from "./components/Header";
import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";


export default function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/><br/>
      <About/>
      <Skills/>
      <Contact/>
    </div>
  );
}
