import React, { useEffect, useState } from 'react';
import './shop.css'

const Shop = () => {

    const [products, setProducts]=useState([]);

    useEffect(()=>{
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data =>setProducts(data));

    },[])
    return (
        <div className="Shoping-container">
            <div className="product-container">
                <h2>products:{products.length}  </h2>
            </div>
            <div className="cart-container">
                <h3>order history</h3>
                <h5>Items order</h5>
            </div>

           
        </div>
    );
};

export default Shop;