import React from 'react';
import './checkout.scss';
import {connect} from 'react-redux';
import CheckOutItem from '../../components/checkoutItem/checkOutItem';
import StripeButton from '../../components/stripe-button/stripe-button';



const CheckOut = ({cartItems,totalValue })=>{

    return(
    <div className="checkout-page">
            <div className='checkout-header'>
                
                <div className='header-block'>
                    <span>Product</span>
                </div>
                
                <div className='header-block'>
                    <span>Description</span>
                </div>
                
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                
                <div className='header-block'>
                    <span>Price</span>
                </div>
                
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            
            </div>

            {
                cartItems.map(cartItem=>(
                    <CheckOutItem
                    key={cartItem.id}
                    cartItem={cartItem}
                    />
                ))
            }

        <div className='total'><span>TOTAL:{totalValue}$</span></div>
            <div className='test-warning'>
                *Please use the following test credit card for payments*
                <br/>
                4242 4242 4242 4242 - Exp:"ANY FURTHER DATE"  - CVC: 123
            </div>
            <br/>

        <StripeButton   price={totalValue} className='stripe-btn'/>
    </div>
)
        }

const mapStateToProps = state =>({

    cartItems: state.cart.cartItems,

    totalValue: state.cart.cartItems.reduce((accumulatedQuantity, cartItem)=> 
    accumulatedQuantity + cartItem.quantity *cartItem.price,
    0)
})




export default connect(mapStateToProps)(CheckOut);