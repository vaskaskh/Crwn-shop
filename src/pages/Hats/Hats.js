import React from 'react';
import './Hats.scss'
import {connect} from 'react-redux';
import PreviewHats from  './previewHats';


const Hats = ({hatItems}) =>(
    <div className='collections-overview'>
         {
            hatItems.map(({id, ...collectionsProps})=>(
                <PreviewHats
                key={id}
                {...collectionsProps}
                />
            ))
        }
    </div>
)


const mapStateToProps = (state)=>({
    hatItems: state.hats.hatItems
})
export default connect(mapStateToProps)(Hats);