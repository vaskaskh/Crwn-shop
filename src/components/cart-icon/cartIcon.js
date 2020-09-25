import React from 'react';
import './cartIcon.scss';
import {connect} from 'react-redux';
import {toggleCartHidden} from './../../components/Redux/actions/cartAction';
import {selectCartItemsCount} from '../Redux/Selectors/cart-selectors';

const CartIcon =({toggleCartHidden, itemCount})=>(
    <div className='cart-icon' onClick={toggleCartHidden}>

        <img src="https://www.iconfinder.com/data/icons/all-for-shop-free-samples/128/shop_package-512.png" alt="" className='shopping-icon'/>
        <span className='item-count'>{itemCount}</span>
    
    </div>

)

const mapDispatchToProps = dispatch=>({

    toggleCartHidden: ()=>dispatch(toggleCartHidden())

})

const mapStateToProps =state=>{
    return{
        itemCount: selectCartItemsCount(state) 
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);