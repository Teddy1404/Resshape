import React from "react";
import "./Home.css";
import Home1 from "../images/home.jpg";
import Navbar  from "../Nabvbar/Navbar";
const Home = () => {
  return (
    <>
      <div className="container">
        <div className="Home">
       
          <div className="icons">
            <a href="">
              <i class="fa-brands fa-facebook fa-beat-fade neon"></i>
            </a>
            <a href="">
              <i class="fa-brands fa-instagram fa-beat"></i>
            </a>
            <a href="">
              <i class="fa-brands fa-linkedin"></i>
            </a>
            <a href="">
              {" "}
              <i class="fa-brands fa-twitter fa-beat"></i>
            </a>
            <a href="">
              {" "}
              <i class="fa-brands fa-youtube fa-beat"></i>
            </a>
          </div>
          
          <img src={Home1} className="home1" alt="" />
         <div className="n-1">
         <Navbar/>
         </div>
          <div class="bottom-left">
         
            <div className="glitch">
             <p>Axis'23</p>
            
            </div>
            <div className="p-2">
              <p>CONFLUX OF PERCEPTIONS</p>
             </div>

             <div className="p-3">
             AXIS is the annual technical festival of VNIT.<br></br>Starting out in 2001, AXIS has transformed into<br></br>
             Central India's largest technical festival.
             </div>

             <button class="custom-btn btn-5">Register now</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
