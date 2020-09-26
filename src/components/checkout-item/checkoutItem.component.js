import React from 'react';
import {connect} from 'react-redux';
import { increaseQuantity, decreaseQuantity, removeItem} from '../../redux/cart/cart.actions';
import './checkoutItem.styles.scss';

const CheckoutItem = ({item: {id,imageUrl,name,price,quantity}, increaseQuantity, decreaseQuantity, removeItem}) =>(
    <div className="checkout-item">
        <img src={imageUrl} alt="Item Preview"/>
            <p>{name}</p>
            <div className="quantity-container">
                <span onClick = {()=>{ decreaseQuantity({id,imageUrl,name,price,quantity})} }>{"<"}</span>
                <p>{quantity}</p>
                <span onClick = {()=>{ increaseQuantity({id,imageUrl,name,price,quantity})} }>{">"}</span>
            </div>
            <p>{quantity * price}</p>

            <p className="cross" onClick={ ()=>{removeItem({id,imageUrl,name,price,quantity})} }>&#10005;</p>

    </div>
)

const mapDispatchToProps = dispatch => ({
    increaseQuantity: item => dispatch(increaseQuantity(item)),
    decreaseQuantity: item => dispatch(decreaseQuantity(item)),
    removeItem: item => dispatch(removeItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem);
