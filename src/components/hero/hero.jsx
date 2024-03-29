import React from 'react';
import "./hero.css"
import hand_icon from "../assets/Assets/hand_icon.png"
import arrow_icon from "../assets/Assets/arrow.png"
import hero_image from "../assets/Assets/hero_image.png"
const Hero = () => {
    return (
        <div className='hero'>
            <div className="hero-left">
              <h2>new Arraivals only</h2>
              <div>
                <div className='hand-hand-icon'>
                     <p>new</p>
                     <img src={hand_icon} alt=""/>
                </div>
                <p>collections</p>
                <p>for everyone</p>
              </div>
              <div className='hero-latest-btn'>
                <div>latest collection</div>
                <img src={arrow_icon} alt=""/>
              </div>
            </div>
            <div className="hero-right">
                <img src={hero_image}/>
            </div>
        </div>
    );
}

export default Hero;
