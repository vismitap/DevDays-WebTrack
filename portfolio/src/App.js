import "./styles.css";
import Header from "./components/Header";
import Intro from "./components/Intro";
import About from "./components/About";
import Skills from "./components/Skills";
import Contact from "./components/Contact";


export default function App() {
  return (
    <div className="App">
      <Header/>
      <Intro/><br/>
      <About/>
      <Skills/>
      <Contact/>
    </div>
  );
}
