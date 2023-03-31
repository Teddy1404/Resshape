import React from 'react'
import './About.css'
import Axis from '../images/AXIS-THEME.png'
const About = () => {
  return (
   <>
   <div className="about">
   <span>About Us and Our Theme</span>
   </div>
   <div className="heading">
    <div className="left">
        <img src={Axis} alt="" />
    </div>
    <div className="right">  <h2>About Us</h2>
    <p>Extended Reality, the revolutionary technology that blurs the boundaries between our tangible world and the digital realm. The three pillars of Extended Reality: Virtual Reality, Augmented Reality, and Mixed Reality provide an immersive and interactive experience that stimulates our senses and enhances our perception. With the rapid pace of innovation, the only limit to its potential is our imagination. As we enter a new era of human-computer interaction, Extended Reality promises to redefine our relationship with technology, shaping our world in unimaginable ways. Adapt. Transform. Extend.</p>

    <div className="count">
        <div className="item-1 item">200+<br/>Colleges</div>
        <div className="item-1 item">30+<br/>Events</div>
        <div className="item-1 item">25000+<br/>Footfall</div>
        <div className="item-1 item">35000+<br/>Participants</div>
        
    </div>
    <button class="custom-btn2 btn-2">Read More</button>
    </div>
 
   </div>
   
   </>
  )
}

export default About
