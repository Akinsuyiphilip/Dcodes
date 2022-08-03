import React from 'react';
import { Link } from 'react-router-dom';
import Navimg from "./images/code.png";
import '../pages/Service';
import '../pages/Testimonial';
import '../pages/Team';


function Navbar() {
return (
<>
  
    <div className="navbar">
      <div className="navsec1">
        <div className="navimg">
          <img src={Navimg} alt="navbarimage" />
        </div>
        <div className="navlinks">
          <Link 
          to='/Service'
          >
            Services
            </Link>
          <Link
           to="/Team"
           >
            Team
            </Link>
          <Link 
          to="/Testimonials"
          >
            Testimonials
            </Link>
        </div>
      </div>

        <div className="contact">
        <a href="">Contact</a>
        </div>
    </div>

</>
)
}

export default Navbar