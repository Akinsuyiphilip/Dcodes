import React, {useState} from 'react';
import Datatestimonial from './Testdata';
import quoteleft from '../images/quoteleft.png';
import quoteright from '../images/quoteright.png';




function Testpro() {
const [current, setCurrent] = useState(null)


return (
<>

    {Datatestimonial.map((data, index) => { return (
    <div key={index}>
        <div className="leftside">
        <h1>
            <img src={quoteleft} alt="" />
            {data.title}
            <img src={quoteright} alt="" />
        </h1>
        <div className='picseg'>
            <div>
                <img src={data.imagepro} alt="" />
            </div>
            <p>{data.name}</p>
            <p>{data.stats}</p>
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