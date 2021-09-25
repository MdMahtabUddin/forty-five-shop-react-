import React from 'react';
import './Product.css';

const Product = (props) => {
    console.log(props.product);
    const {name, img,seller, price, stock}= props.product;
    return (
        <div className="porduct">
            <div>
            <img src={img} alt="" />
            </div>
            <div>
            <h4 className="product-name">{name} </h4>
            <p><small>By:{seller} </small></p>
            <p>Price:{price} </p>
            </div>
        </div>
    );
};

export default Product;