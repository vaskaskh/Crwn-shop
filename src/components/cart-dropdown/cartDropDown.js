import React from 'react';
import {connect} from 'react-redux';
import './cartDropDown.scss';
import CartItem from './../cart-item/cart-item';
import { selectCartItems } from './../Redux/Selectors/cart-selectors';
import {withRouter} from 'react-router-dom';
import { toggleCartHidden }from '../Redux/actions/cartAction';



const CartDropdown = ({cartItems, history, hidden})=>(
    <div className='cart-dropdown'>
        <div className='cart-dropdown-items' >
            {
                cartItems.length? (
                cartItems.map(cartItem=>(
                    <CartItem
                    key={cartItem.id}
                    item={cartItem}
                    />   
                ))
             ):(
                 <span className='empty-message'>Your cart is empty</span>
             )
            }

        </div>
        <button className='cart-dropdown-btn' onClick={()=>{
            history.push('/checkout');
            hidden()
            }}>
            GO TO CHECKOUT</button>        
    </div>
)


const mapStateToProps = state=>{
    return{
        cartItems: selectCartItems(state)
    }
}

const mapDispatchToProps = dispatch =>({
    hidden: ()=>dispatch(toggleCartHidden())
})


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));