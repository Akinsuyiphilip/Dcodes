import React from 'react';
import profileData from './Profiledata';
import './profile.css'



function profiles() {
return (
<section>

    
    <div className="profilescontext">
        { profileData.map((profile, index) => { return(
        <div className=" content" key={index}>
            <img src={profile.img} alt='image'  />
            <h3 >{profile.name} </h3>
            <p >{profile.stats}</p>
        </div> )})}
        
    </div>

</section>
)
}

export default profiles;