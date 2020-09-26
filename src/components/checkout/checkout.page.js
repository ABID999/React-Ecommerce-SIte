import React from 'react';
import {connect} from 'react-redux'
import './checkout.styles.scss';
import CheckoutItem from '../checkout-item/checkoutItem.component';

const CheckoutPage = ({cartItems, total}) =>(
    <div className="checkout-container">
        <div className="label-container">
            <p>Product</p>
            <p>Description</p>
            <p>Quantity</p>
            <p>Price</p>
            <p>Remove</p>
        </div>
        <hr/>
        <div className="item-container">
            {   cartItems.length === 0 
                ?
                <h2>No items on the cart</h2>
                :
                cartItems.map( (item)=>(
                    <CheckoutItem key={item.id} item={item}/>
                ))
            }
        </div>
        <hr/>
        <div className="total-container">
        <h1>TOTAL: ${total}</h1>
        </div>
        
    </div>
)

const mapStateToProps = state =>({
    cartItems: state.cart.cartItems,
    total: state.cart.cartItems.reduce( (acc, currentItem)=> (acc+ (currentItem.price*currentItem.quantity) ), 0)
})

export default connect(mapStateToProps)(CheckoutPage);

