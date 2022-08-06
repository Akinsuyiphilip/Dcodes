import React, {useState} from 'react';
import Datatestimonial from './Testdata';
import quoteleft from '../images/quoteleft.png';
import quoteright from '../images/quoteright.png';
import Leftarrow from './Leftarrow.png';
import Rightarrow from './Rightarrow.png';
import './Testpro.css'



function Testpro({slides}) {
const [current, setCurrent] = useState(0);
const length = slides.length;

const nextSlide = () => {
setCurrent(current === length - 1 ? 0 : current +1);
};
const prevSlide = () => {
setCurrent(current === 0 ? length - 1 : current -1);
}


if(!Array.isArray(slides) || slides.length <= 0 ){ return null } ; return ( <>

    {Datatestimonial.map((data, index) => { return (
       

       
    <div  className={index === current ? 'slide active' : 'slide' } key={index}>
         <div className="tet">
        {index === current &&
            <div className="leftside">
            <img src={quoteleft} alt="" className='letqu' />
            <div >
            <h1>
                {data.title}
                <img src={quoteright} alt="" className='ritqu' />
            </h1>
            </div>
            <div className='picseg'>
                <div className='proimg'>
                    <img src={data.imagepro} alt="" />
                </div>
                <div className="proword">
                    <h3>{data.name}</h3>
                    <p>{data.stats}</p>
                </div>
            </div>

            <div className="arrows">
                <img src={Leftarrow} alt="" onClick={prevSlide} />
                <img src={Rightarrow} alt="" onClick={nextSlide} />
            </div>
        </div>
        }
        {index === current &&
                 <div className="rightside">
                 <img src={data.imagebackground} alt="" />
             </div>
        }
       
    </div>
    </div>
    )})}


    </>
    )
    }

    export default Testpro