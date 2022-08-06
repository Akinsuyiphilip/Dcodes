import React,{useState} from 'react';
import Dataslider from './DataSLider';
import Leftarrow from './Leftarrow.png';
import Rightarrow from './Rightarrow.png';
import Button from '../Button';
import './Slider.css'


const Slider = ({ slides }) =>{

const [current, setCurrent] = useState(0);
const length = slides.length;

const nextSlide = () => {
setCurrent(current === length - 1 ? 0 : current +1);
};
const prevSlide = () => {
setCurrent(current === 0 ? length - 1 : current -1);
}

if(!Array.isArray(slides) || slides.length <= 0 ){ return null } ; 

return ( <>
    <section>
        <div className="firstsec">
            {Dataslider.map((slide, index) => { return(

            <div className={index === current ? 'slide active' : 'slide' } key={index}>
                {index === current && <h2>{slide.title}</h2> }
            </div>
            )})}
            {Dataslider.map((slide, index) => { return( 
                <div
                className={ index === current ? 'slide active' : 'slide'} key={index}>
                    {index === current && <p>{slide.Sub}</p>}
                </div>
            )})}
            <Button text="Learn more" />

            <div className="arrows">
                <img src={Leftarrow} alt="" onClick={prevSlide} />
                <img src={Rightarrow} alt="" onClick={nextSlide} />
            </div>

        </div>

        {Dataslider.map((slide, index) => {
        return(
        <div className={index===current ? 'slide active' : 'slide' } key={index}>
            {index === current && <img src={slide.img} alt="travel" /> }

        </div>


        ) })}

    </section>

    </>
    )
    }

    export default Slider