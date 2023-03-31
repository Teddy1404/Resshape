import React from 'react'
import webteam from '../images/webteam.gif'
const Team = () => {
  return (

    <>
    
<div className="team flex justify-center space-x-12 mt-80 mb-20">

     <div className="meet flex-col my-32">
        <h1>Meet Our Team</h1>
        <button class="custom-btn btn-5 mx-0">Core Team</button>
        <button class="custom-btn btn-5">Web Team</button>
     </div>
     <div className="web "><img className=' rounded-bl-3xl rounded-tr-3xl' src="giphy.gif" alt="Image"/></div>
    </div>
   
    </>
  

  )
}

export default Team
