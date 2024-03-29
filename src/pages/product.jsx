import React, { useContext } from 'react';
import { ShopContext } from '../context/shopContext';
import { useParams } from 'react-router-dom';
import Breadcrum from '../components/Breadcrums/Breadcrum';
import ProductDisplay from '../components/productDisplay/productDisplay';
import DescriptionBox from"../components/description box/description"
import RelatedProduct from '../components/relateProduct/relatedProduct';

const Product = () => {
    const {all_product}=useContext(ShopContext);
    const {productId}= useParams();
    const product = all_product.find((e)=> e.id === Number(productId))
    return (
        <div>
            <Breadcrum product={product}/>
            <ProductDisplay product={product}/>
            <DescriptionBox/>
            <RelatedProduct/>
        </div>
    );
}

export default Product;
