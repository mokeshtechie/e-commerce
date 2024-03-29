import React, { useState } from 'react';
import'./navbar.css'
import logo from '../assets/Assets/logo.png';
import cart_icon from"../assets/Assets/cart_icon.png";
import { Link } from 'react-router-dom';
import {FaBars, FaTimes}from "react-icons/fa"


const Navbar = () => {
    const[menu,setMenu] = useState("shop");
    const [click,setClick]=useState(false);
    const handleClick = ()=> setClick(!click);
     
    return (
        <div className="navbar">
            <div className='nav-log'>
                <img src={logo} alt=""/>
                <p> saanu trends</p>
            </div>
            <ul className={click ? "nav-menu-active":"nav-menu"}>
            <li onClick={()=>{setMenu("shop")}}><Link  style={{textDecoration:"none"}}to="/">Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration:"none"}} to="/mens">Men</Link>{menu==="mens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("womens")}}> <Link style={{textDecoration:"none"}} to="/womens">women</Link>{menu==="womens"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Kids")}}><Link style={{textDecoration:"none"}} to="/Kids">Kids</Link>{menu==="Kids"?<hr/>:<></>}</li>    
            </ul>  
          <div className='hamburgur' onClick={handleClick}>
              {click?(<FaTimes size={20} style={{color:"black"}}/>):(<FaBars size={20} style={{color:"black"}}/>)}
          </div>
            <div className='nav-login-cart'>
                <div className='btn'>
                <Link to="/login"><button >Login</button></Link>
                </div>
            
              <div className='first'>
                <div>
                <Link to="/cart"><img src={cart_icon}/></Link>
                </div>
                
              <div className='nav-cart-count'> 0</div>   
              </div>
              
               
            </div>  
           
        </div>
    );
}

export default Navbar;
