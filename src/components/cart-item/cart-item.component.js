import React from 'react';
import './cart-item.styles.scss';

const CartItem = ({item: {imageUrl,name,price,quantity}}) =>(
    <div className="cart-item">
        <img src={imageUrl} alt="Item Preview"/>
        <div>
            <p>{name}</p>
            <p>{quantity} X {price}</p>
        </div>

    </div>
)

export default CartItem;
