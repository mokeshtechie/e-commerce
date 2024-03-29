import React from 'react';
import "./new collection .css";
import new_collection from "../assets/Assets/new_collections"
import Item from "../item/item"
const NewCollection = () => {
    return (
        <div className='new-collections'>
            <h1>NEW COLLECTION</h1>
            <hr />
            <div className='collections'>
              {new_collection.map((item,i)=>{
                return <Item Key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
              })}
            </div>
        </div>
    );
}

export default NewCollection;
