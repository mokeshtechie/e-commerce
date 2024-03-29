import React from 'react';
import"./newsletter.css"
const Newsletter = () => {
    return (
        <div className='newsletter'>
            <h1>get exclusive offers on your Email</h1>
            <p>subscribe to our newsletter and stay updated</p>
            <div>
                <input type="email" placeholder='your Email id'/>
                <button>subscribe</button>
            </div>
        </div>
    );
}

export default Newsletter;
