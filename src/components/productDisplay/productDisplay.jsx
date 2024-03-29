import React, { useContext } from 'react';
import "./productDisplay.css"
import star_icon from "../assets/Assets/star_icon.png"
import star_dull_icon from "../assets/Assets/star_dull_icon.png";
import { ShopContext } from '../../context/shopContext';
const ProductDisplay = (props) => {
    const{product}=props;
    const{addToCart}=useContext(ShopContext);
    return (
        <div className='productdisplay'>
        <div className="productDisplay-left">
            <div className="productdisplay-img-list">
                <img src={product.image}/>
                <img src={product.image}/>
                <img src={product.image}/>
                <img src={product.image}/>
                
            </div>
            <div className="productdisplay-img">
                <img className='productdisplay-main-img' src={product.image}/>
            </div>
        </div>
        <div className="productdisplay-right">
             <h1>{product.name}</h1>
             <div className="productdisplay-right-stars">
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_icon} alt="" />
                <img src={star_dull_icon} alt="" />
                <p>(122)</p>
             </div>
             <div className="productdisplay-right-prices">
                <div className='productdisplay-right-price-old'>
                    ${product.old_price}
                </div>
                <div className="product-right-price-new">
                   <p>offer: ${product.new_price}</p>
                    </div>
             </div>
             <div className="productdisplay-right-description">
                <p>
                A lightweight , usually knitted,pullover shirt, close-fiitting and will a round neckline and shot sleevess, worn as an undershirt oroutergaement
                </p>
               
             </div>
             <div className="productdisplay-content">
                <h1>select size:</h1>
                <div className="productdisplay-size">
                    
                    <div>s</div>
                    <div>m</div>
                    <div>l</div>
                    <div>xl</div>
                    <div>xxl</div>
                  
                    
                </div>
             </div>
             <button onClick={()=>{addToCart(product.id)}}>Add to cart</button>
             <p className='productdisplay-right-category'><span>category:</span>women, t-shirt,crop Top</p>
             <p className='productdisplay-right-category'><span>tags:</span>women, t-shirt,crop Top</p>
        </div>
        </div>
    );
}

export default ProductDisplay;
