import React from 'react';
import {withRouter} from 'react-router-dom';
import './menu-item.scss';


const MenuItem = ({title, imageUrl,linkUrl,history, match}) =>(
    <div 
    style={{backgroundImage: `url(${imageUrl})`}}
    className='menu-item' onClick={()=>history.push(`${match.url}${linkUrl}`)} >
    <div className='content'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <span className='subtitle'>SHOP NOW</span>
    </div>
</div>
)

export default withRouter(MenuItem);