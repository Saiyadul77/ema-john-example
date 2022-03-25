import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

const Product = ({ product, addToCartHandler }) => {
    // const { product, addToCartHandler } = props // if used it
    // console.log(props.product)
    const { img, name, price, seller, ratings } = product;
    // const { img, name, price, seller, ratings } = props.product;
    // console.log(props)
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <p className='product-name'>{name}</p>
                <p className='product-price'>Price: {price}</p>
                <p className='product-seller'>Seller: {seller}</p>
                <p className='product-seller'>Rating: {ratings}</p>
            </div>
            <button onClick={() => addToCartHandler(product)} className='add-cart'>
                <p className='btn-cart'>Add to Cart</p>
                <FontAwesomeIcon icon={faShoppingCart} ></FontAwesomeIcon>
            </button>


            {/* <button onClick={() => props.addToCartHandler(props.product)} className='add-cart'>Add to Cart</button> */}
        </div >
    );
};

export default Product;