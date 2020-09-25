import React from 'react';
import './Header.scss';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import firebase from '../firebase/firebase';
import CartIcon from '../cart-icon/cartIcon';
import CartDropDown from './../cart-dropdown/cartDropDown';
import {selectCartHidden} from '../Redux/Selectors/cart-selectors';
import {selectCurrentUser } from '../Redux/Selectors/user-selectors';


class  Header  extends React.Component{
    render(){
        const {hidden, currentUser} = this.props;
        return(
    <div className='Header'>
            < Link to='/'>
                <img src="https://image.flaticon.com/icons/png/512/84/84583.png" alt="xicon" className='header--img'/>
            </ Link>
         <div className='Header-right'>

            <Link to='/shop' className='Header-right-option'>
                SHOP
            </Link>
            <Link to='/contact'   className='Header-right-option'>
                CONTACT
            </Link>

           {
               currentUser? (
                    <Link  className='Header-right-option' onClick={()=>firebase.auth().signOut()}
                      to='/signin' >
                        Sign Out
                    </Link>
               ):(
                <Link to='/signin' className='Header-right-option'>
                    SIGN In
                </Link>
               )
           }
           </div>
           <div>
           <CartIcon/> 

{hidden ? null 
            :(
            <CartDropDown/>     
            )
}
</div>
           </div>
    )}
}


const mapStateToProps = state=>{
    return{
        currentUser: selectCurrentUser(state),
        hidden: selectCartHidden(state)
    }
}
export default connect(mapStateToProps)(Header);


