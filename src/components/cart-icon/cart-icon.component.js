import React from 'react';
import {connect} from 'react-redux';
import {toggleCartHidden} from '../../redux/cart/cart.actions';
import {ReactComponent as ShoppingIcon} from '../../assets/shopping-bag.svg';

import './cart-icon.styles.scss';

const CartIcon = ({toggleCartHidden, itemQuantity}) =>{
    // let totalQuantity = 0;
    
    // if( cartItems.length !== 0){
    // //    totalQuantity = cartItems.reduce( (acc, curVal)=> (acc.quantity+curVal.quantity))
    //     cartItems.forEach(item => {
    //         totalQuantity += item.quantity
    //     });
    // }
    
    return (
        <div className="cart-icon" onClick={toggleCartHidden}>
            <ShoppingIcon className="shopping-icon" />
            <span className="item-count">{itemQuantity}</span>
        </div>
    )
}

const mapDispatchToProps = dispatch =>({
    toggleCartHidden: ()=>dispatch(toggleCartHidden())
})

const mapStateToProps = (state) => ({
    itemQuantity: state.cart.cartItems.reduce( 
        (acc, currentItem)=> (acc+currentItem.quantity)
        ,0
        )
})

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);