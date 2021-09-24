import React from 'react';
import logo from '../../images/logo.png'
import './Header.css'

const header = () => {
    return (
        <div className="header">
            
            <img className="logo" src={logo} alt="" />
            <nav>
                <a href="/shop">Shops</a>
                <a href="/order">Ordeers</a>
                <a href="/contact">contact Us</a>
                </nav>
        </div>
    );
};

export default header;