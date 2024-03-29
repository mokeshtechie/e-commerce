import React from 'react';
import"./offers.css";
import exclusive_image from "../assets/Assets/exclusive_image.png"
const Offer = () => {
    return (
        <div className='offers'>
            <div className='offers-left'>
             <h1>Exclusive</h1>
             <h1>offers for you</h1>
             <p>only On Best Sellers Products</p>
             <button>Check Now</button>
            </div>
            <div className="offers-right">
                <img src={exclusive_image}/>
            </div>
        </div>
    );
}

export default Offer;
