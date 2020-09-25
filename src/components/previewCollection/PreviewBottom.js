import React from 'react';
import './previewBottom.scss';
import {connect} from 'react-redux';
import {addItem} from './../Redux/actions/cartAction';


const PreviewBottom = ({item,addItem})=>{
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
export default connect(null, mapDispatchToProps)(PreviewBottom);