import React from 'react';
import Button from '../Components/Button';





function Homepage() {
  return (
    <>
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
            <Button  text="All Work"/>
            </div>
            
        </div>
 
    </>
  )
}

export default Homepage