import React,{useContext} from 'react';
import "./cardItem.css"
import {ShopContext}from "../../context/shopContext"
import remove_icon from "../assets/Assets/cart_cross_icon.png" 
const CardItem = () => {
    const{all_product,cartItems,removeFromCart}= useContext(ShopContext)
    return (
        <div className='carditems'>
<div className="cartitem-format-main">
    <p>product</p>
    <p>title</p>
    <p>price</p>
    <p>quantity</p>
    <p>total</p>
    <p>remove</p>
</div>
<hr/>

        {all_product.map((e)=>{
            if(cartItems[e.id]>0)
            {
                return <div className=" cartitem-format-main cartitems-format">
                <img src={e.image} alt="" className='carticon-product-icon' />
                <p>{e.name}</p>
                <p>${e.new_price}</p>
                <button className='cartitem-quantity'>{cartItems[e.id]}</button>
                <p>{e.new_price*cartItems[e.id]}</p>
                <img src={remove_icon} onClick={()=>{removeFromCart(e.id)}} alt="" />
                   
                </div>
            }
            return null;
        })}
      <div className='cartitems-down'>
        <div className='cartitems-total'>
         <h1> cart total</h1>
         <div className='cartitems-total-item'>
            <p>subtotal</p>
            <p>${0}</p>
         </div>
         <hr />
         <div className="cartitem-total-item">
            <p>shipping fee</p>
            <p>free</p>
            </div>
            <hr/>
            <div className="cartitems-total-item">
                <h3>total</h3>
                <h3>${0}</h3>
            </div>
        </div>
      </div>
    <div>
        <hr/>
    </div>
        </div>
    );
}

export default CardItem;
