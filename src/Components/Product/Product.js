import React from 'react';
import './Product.css';
import StarIcon from '@material-ui/icons/Star';
import Image from '../../img/dinner2.png'

const Product = (props) => {
    const { id, title, price, rating, image } = props.pd;
    return (
        <div className="container">
            <div className="product">
                <div className="product-title">
                    <strong><p >{title}</p></strong>
                </div>
                <div className="product-price">
                    <p>
                        <small>$</small>
                        <strong>{price}</strong>
                    </p>
                    <p>{rating}</p>
                </div>
                <img src={Image} alt="" />
                <button>Add to Basket</button>
            </div>
        </div>
    );
};

export default Product;