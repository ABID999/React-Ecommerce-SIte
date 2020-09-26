import React from 'react';
import {connect} from 'react-redux';
import {withRouter} from 'react-router-dom';
import './cart.styles.scss';

import CustomButton from '../custom-button/custom-button.component';
import CartItem from '../cart-item/cart-item.component';
import {toggleCartHidden} from '../../redux/cart/cart.actions';


const Cart = ({cartItems, history, dispatch}) =>(
    <div className="cart-dropdown">
        <div className="cart-items">

            {   cartItems.length === 0 
                ?
                <h2>No items on Cart</h2>
                :
                cartItems.map( item => {
                    console.log(item);
                    return (
                        <CartItem key={item.id} item={item}/>
                    )
                })
            }
        </div>
        <CustomButton onClick={ ()=> {
            history.push('/checkout');
            dispatch(toggleCartHidden());
        }}>
            GO TO CHECKOUT
        </CustomButton>
    </div>
)

const mapStateToProps = state =>({
    cartItems: state.cart.cartItems
})

export default withRouter(connect(mapStateToProps)(Cart));