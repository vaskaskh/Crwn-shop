import React from 'react';
import './Jackets.scss'
import {connect} from 'react-redux';
import PreviewJackets from './previewjackets';


const Men = ({jacketItems}) =>(
    <div className='collections-overview'>
         {
            jacketItems.map(({id, ...collectionsProps})=>(
                <PreviewJackets
                key={id}
                {...collectionsProps}
                />
            ))
        }
    </div>
)


const mapStateToProps = (state)=>({
    jacketItems: state.jackets.jacketItems
})
export default connect(mapStateToProps)(Men);