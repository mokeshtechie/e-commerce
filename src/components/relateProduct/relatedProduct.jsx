import React from 'react';
import "./relatedproduct.css";
import data_product from '../assets/Assets/data';
import Item from "../item/item"
const RelatedProduct = () => {
    return (
        <div className='relatedProducts'>
          <h1>retelated products</h1>  
          <hr />
          <div className="relatedproducts-item">
            {data_product.map((item,i)=>{
                return <Item Key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
            })}
          </div>
        </div>
    );
}

export default RelatedProduct;
