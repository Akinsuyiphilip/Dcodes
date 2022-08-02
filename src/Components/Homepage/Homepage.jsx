import React from 'react';
import { BrowserRouter as Router} from 'react-router-dom';
import Button from '../Button';
import Navbar from '../Navbar';




function Homepage() {
  return (
    <>
    <Navbar />
    <Router>
        <div className="homepage">
            <div className="textarea">
                <h3>
                We  <span> design </span>your feelings,<span> code</span> emotions
                </h3>
                <p>
                We talented people with latest technologies can help you to fulfil your dream.
                </p>
            </div>
            <div className="btn">
            <Button />
            </div>
            
        </div>
    </Router>
    </>
  )
}

export default Homepage