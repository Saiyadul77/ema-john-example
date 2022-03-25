import React from 'react';

const Cart = ({ cart }) => {
    return (
        <div>
            <h1>Cart summary</h1>
            <p>Cart Length: {cart.length}</p>
        </div>
    );
};

export default Cart;