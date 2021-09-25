import React, { useEffect, useState } from 'react';
import Product from '../Product/Product';
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
                {
                    products.map(product=> <Product product={product}></Product>)
                }
            </div>
            <div className="cart-container">
                <h3>order history</h3>
                <h5>Items order</h5>
            </div>

           
        </div>
    );
};

export default Shop;