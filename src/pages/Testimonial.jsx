import React from 'react';
import Testpro from '../Components/testdatas/Testpro';
import Datatestimonial from '../Components/testdatas/Testdata'

function Testimonial() {
  return (
    <div className='testimonial'>
    
      <Testpro  slides={Datatestimonial}/>
   
    </div>
  )
}

export default Testimonial;