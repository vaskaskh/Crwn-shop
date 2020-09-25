import React from 'react';
import './collections-overview.scss';
import {connect} from 'react-redux';
import PreviewCollection from './../../components/previewCollection/previewCollection';



const CollectionsOverview = ({collections}) =>(
    <div className='collections-overview'>
        {
            collections.map(({id, ...collectionsProps})=>(
                <PreviewCollection
                key={id}
                {...collectionsProps}
                />
            ))
        }
    </div>
    
)
const mapStateToProps = (state)=>({
    collections: state.shop.collections 
})

export default connect(mapStateToProps)(CollectionsOverview);