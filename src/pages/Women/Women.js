import React from 'react';
import './Women.scss';
import {connect} from 'react-redux';
import PreviewWomen from './previewWomen';


const Men = ({womenItems}) =>(
    <div className='collections-overview'>
         {
            womenItems.map(({id, ...collectionsProps})=>(
                <PreviewWomen
                key={id}
                {...collectionsProps}
                />
            ))
        }
    </div>
)


const mapStateToProps = (state)=>({
    womenItems: state.women.womenItems
})
export default connect(mapStateToProps)(Men);