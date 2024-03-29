import React from 'react';
import "./footer.css"
import footer_logo from "../assets/Assets/logo_big.png"
import instagram_icons from "../assets/Assets/instagram_icon.png"
import pintester_icon from "../assets/Assets/pintester_icon.png"
import whatsapp_icon from "../assets/Assets/whatsapp_icon.png"
const Footer = () => {
    return (
        <div className='footer'>
          <div className="footer-logo">
            <img src={footer_logo}/>
        <p>Shoper</p>
            </div>  
            <ul className="footer-link">
                <li>company</li>
                <li>products</li>
                <li>offices</li>
                <li>about</li>
                <li>contact</li>
            </ul>
            <div className="footer-social-icon">
                <div className="footer-icons-container">
                    <img src={instagram_icons} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={pintester_icon} alt="" />
                </div>
                <div className="footer-icons-container">
                    <img src={whatsapp_icon} alt="" />0
                </div>
            </div>
            <div className='footer-copyright'>
                <hr/>
                <p>copyright @2023 -All right reserved.</p>
            </div>
        </div>
    );
}

export default Footer;
