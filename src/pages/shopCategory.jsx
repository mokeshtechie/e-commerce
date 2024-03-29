import React, { useContext } from 'react';
import "./css/shopCatagory.css";
import  {ShopContext}  from '../context/shopContext';
import dropdown_icon from "../components/assets/Assets/dropdown_icon.png"
import Item from "../components/item/item"
const ShopCategory = (props) => {
    const {all_product}=useContext(ShopContext);
    return (
        <div className='shop-category'>
            <img  className="shopcategory-banner" src={props.banner}/>
            <div className="shopcategory-indexSort">
                <p>
                <span>showing 1 to 12</span>out of 36 products
                </p>
               <div className='shopcategory-sort'>
                sort by<img src={dropdown_icon} alt=""/>
                </div> 
            </div>
            <div className="shopcategory-products">
                {all_product.map((item,i)=>{
                 if(props.category===item.category){
                     return<Item Key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                 }
                 else{
                    return null;
                 }
                })}
            </div>
            <div className='shopcategory-loadmore'>
                explore More  
            </div>
        </div>
    );
}

export default ShopCategory;
