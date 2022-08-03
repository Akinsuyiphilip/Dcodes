import React from 'react';
import Dataslider from './DataSLider';
import Leftarrow from './Leftarrow.png';
import Rightarrow from './Rightarrow.png';
import Button from '../Button';
import './Slider.css'


const Slider = () =>{
return (
<>
    <section>
        <div className="firstsec">
            {Dataslider.map((slide, index) => { return( < h2>{slide.title}</h2>)})}
            {Dataslider.map((slide, index) => { return( <p >{slide.Sub}</p>)})}
            <Button text="Learn more" />
            
            <div className="arrows">
            <img src={Leftarrow} alt="" />
            <img src={Rightarrow} alt="" />
            </div>
            
        </div>
        <div className="imga">
            {Dataslider.map((slide, index) => { return( <img src={slide.img} alt=" travel images" /> ) })}
        </div>
    </section>

</>
)
}

export default Slider