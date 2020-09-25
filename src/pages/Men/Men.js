import React from 'react';
import './Men.scss'
import {connect} from 'react-redux';
import PreviewMen from './previewMen';


const Men = ({menItems}) =>(
    <div className='collections-overview'>
         {
            menItems.map(({id, ...collectionsProps})=>(
                <PreviewMen
                key={id}
                {...collectionsProps}
                />
            ))
        }
    </div>
)


const mapStateToProps = (state)=>({
    menItems: state.men.menItems
})
export default connect(mapStateToProps)(Men);