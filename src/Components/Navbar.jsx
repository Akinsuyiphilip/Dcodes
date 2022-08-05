import React from 'react';
import { Link } from 'react-router-dom';
import Navimg from "./images/code.png";
import '../pages/Service';
import '../pages/Testimonial';
import '../pages/Team';
import '../pages/Contact'


function Navbar() {
return (
<>
  <div className="navbar">
      <div className="navsec1">
        <div className="navimg">
          
          <Link
          
          to='/'>
          <img src={Navimg} alt="navbarimage"   />
          </Link>
       
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
          to="/Testimonial"
          >
            Testimonial
            </Link>
        </div>
      </div>

        <div className="contact">
        <Link 
          to="/Contact"
          >
            Contact
            </Link>
        </div>
    </div>
      

</>
)
}

export default Navbar