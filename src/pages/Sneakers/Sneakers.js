import React from 'react';
import './Sneakers.scss';
import {connect} from 'react-redux';
import PreviewSneakers from './previewSneakers';


const Men = ({sneakerItems}) =>(
    <div className='collections-overview'>
         {
            sneakerItems.map(({id, ...collectionsProps})=>(
                <PreviewSneakers
                key={id}
                {...collectionsProps}
                />
            ))
        }
    </div>
)


const mapStateToProps = (state)=>({
    sneakerItems: state.sneakers.sneakerItems
})
export default connect(mapStateToProps)(Men);