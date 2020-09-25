import React from 'react';
import './LastChild.women.scss';
import {connect} from 'react-redux';
import {addItem} from './../../components/Redux/actions/cartAction';


const LastChildWomen = ({item,addItem})=>{
 const {name,price, imageUrl} = item;
    return(
 <div className='collection-item'>
        <div className='image'
        style={{backgroundImage: `url(${imageUrl})`}}
        />
            <div className='collection-footer'>
                <span className='name'>{name}</span>
                <span className='price'>${price}</span>
            </div>
        <button  className='collection-item-btn' onClick={()=>addItem(item)}>Add To Cart</button>
    </div>
)
}



const mapDispatchToProps = dispatch=>({
    addItem: (item)=>dispatch(addItem(item))
})
export default connect(null, mapDispatchToProps)(LastChildWomen);