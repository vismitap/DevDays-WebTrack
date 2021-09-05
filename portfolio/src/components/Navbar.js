import "../styles.css";
import {BrowserRouter as Router, Route} from "react-router-dom";
// import {Navbar,Nav,NavItem } from 'react-bootstrap';
import About from "./About";
import Skills from "./Skills";
import Contact from "./Contact";
// import Intro from "./Intro";

export default function Navbar() {
  return (
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <a className="navbar-brand" style={{color:"white"}}>
          Vismita Prabhu
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <Router>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
                <Route className="nav-link" path='/about' component={About}>
                  About Me <span className="sr-only">(current)</span>
                </Route>
            </li>
            <li className="nav-item">
                <Route className="nav-link" path='/skills' component={Skills}>
                Skills 
                </Route>
            </li>
            <li className="nav-item">
              <Route className="nav-link" path='/contact' component={Contact}>
               Contact Me 
              </Route>
            </li>
          </ul>
        </div>
        </Router>
      </nav>
     );
}
