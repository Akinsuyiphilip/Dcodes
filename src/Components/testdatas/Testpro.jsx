import React, {useState} from 'react';
import Datatestimonial from './Testdata';
import quoteleft from '../images/quoteleft.png';
import quoteright from '../images/quoteright.png';
import './Testpro.css'



function Testpro({slide}) {
const [current, setCurrent] = useState(null);
const length = slide.length;


return (
<>

    {Datatestimonial.map((data, index) => { return (
    <div className='tet' key={index}>
        <div className="leftside">
        <img src={quoteleft} alt="" className='letqu'/>
        <h1>
            {data.title}
            <img src={quoteright} alt="" className='ritqu' />
        </h1>
        <div className='picseg'>
            <div className='proimg'>
                <img src={data.imagepro} alt="" />
            </div>
           <div className="proword">
           <h3>{data.name}</h3>
            <p>{data.stats}</p>
           </div>
        </div>
        </div>
        <div className="rightside">
            <img src={data.imagebackground} alt="" />
        </div>
    </div>
    )})}
   
  
</>
)
}

export default Testpro