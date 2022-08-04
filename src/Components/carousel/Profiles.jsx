import React from 'react';
import profileData from './Profiledata';




function profiles() {
  return (
    <section>
        <div className="profilescontext">
        { profileData.map((profile, index) => { return(  <img src={profile.img} alt='image' />)})}
            { profileData.map((profile, index) => { return ( 
               <h3>{profile.name}</h3>
            )})}
            {profileData.map((profile, index)=> { return ( <p>{profile.stats}</p>)})}
        </div>
    
    </section>
  )
}

export default profiles;