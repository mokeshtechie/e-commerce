import React from 'react';
import Hero from '../components/hero/hero';
import Popular from '../components/popular/popular';
import Offers from '../components/offers/offer'
import NewCollection from '../components/new components/new collection ';
import Newsletter from '../components/newsletter/newsletter';

const Shop = () => {
    return (
        <div>
           <Hero/> 
           <Popular/>
           <Offers/>
           <NewCollection/>
           <Newsletter/>
        </div>
    );
}

export default Shop;
