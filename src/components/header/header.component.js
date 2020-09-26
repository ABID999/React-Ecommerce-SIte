import React from 'react';
import {Link} from 'react-router-dom';
import {ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';
import CartIcon from '../cart-icon/cart-icon.component';
import Cart from '../cart/cart.component';
import {auth} from '../../firebase/firebase.utils';
import {connect} from 'react-redux';

const Header =({currentUser,hidden})=>(
    <div className="header">
        <Link className="logo-container" to="/">
            <Logo className="logo" />
        </Link>
        <div className="options">
            <Link className="option" to="/shop">
                Shop
            </Link>
            <Link className="option" to="/contact">
                Contact
            </Link>
            {currentUser 
                ?<div className="option" onClick={()=>auth.signOut()}>Sign Out</div> 
                : <Link className="option" to="/auth">Sign In</Link>
            }
            <CartIcon />
        </div>
        {   hidden ? null : <Cart />  }
        
    </div>
)

// const mapStateToProps = (state) =>({
//     currentUser: state.user.currentUser
// })

const mapStateToProps = ({ user: {currentUser}, cart: {hidden}}) =>({
    currentUser,
    hidden
})

export default connect( mapStateToProps)(Header);