import React from 'react';
import Dataslider from './DataSLider';

const Slider = () =>{
  return (
    <>
    {Dataslider.map((slide, index) => {
        return(
            // <h2>{slide.title}</h2>
             <img src={slide.img} alt=" travel images" />
            // <p>{slide.Sub}</p>
        )
    })}
    </>
  )
}

export default Slider