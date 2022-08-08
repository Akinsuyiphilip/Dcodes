import React from 'react';
import map from '../Components/images/Map.png';

function Contact() {
return (
<>

  <div className="layers">
    <div className="texts ">
      <div className="toplay">
        <h2>Schedu<span>/</span>e an appointment</h2>
        <p>We are always care about your project. Feel free to contact with us. We make digital any project with
          augmented, virtual and mixed reality. We offer IoT support as well.</p>
      </div>
      <div className="bottomlay">
        <div className="address">
          <h4>Address</h4>
          <p>2118 Thornridge Cir. Syracuse, Connecticut 35624</p>
        </div>
        <div className="phone">
          <h4>Phone</h4>
          <p>+1 629 555 0129</p>
          <p>+1 303 555 0105</p>
        </div>
        <div className="socials">
          <h4>Socia/websites</h4>
          <div className="linksit">
            <div className="top">
              <a href='#'>Facebook</a>
              <a href='#'>Instagram</a>

            </div>
            <div className="mid">
              <a href='#'>YouTube</a>
              <a href='#'>Vimeo</a>
            </div>
            <div className="bott">

              <a href='#'>Dribbble</a>
              <a href='#'>Behance</a>
            </div>
          </div>
        </div>

      </div>

    </div>

    <div>
      <img src={map} alt="" />
    </div>
  </div>
</>
)
}

export default Contact