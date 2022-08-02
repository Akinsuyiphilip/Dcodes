import React from 'react';
import { BrowserRouter as Router, } from 'react-router-dom';
import Navimg from "./images/code.png";



function Navbar() {
return (
<>
  <Router>
    <div className="navbar">
      <div className="navsec1">
        <div className="navimg">
          <img src={Navimg} alt="navbarimage" />
        </div>
        <div className="navlinks">
          <a href="#">Services</a>
          <a href="#">Team</a>
          <a href="#">Testimonials</a>
        </div>
      </div>

        <div className="contact">
        <a href="#">Contact</a>
        </div>
    </div>
  </Router>
</>
)
}

export default Navbar