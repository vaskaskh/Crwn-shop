import React from 'react';
import './previewjackets.scss';
import LastChildJackets from './LastChild.jackets';

const PreviewJackets = ({title, items})=>(
    <div  className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
        {
            items.map(item=>(
                <LastChildJackets
                key={item.id}
                item={item}
                />
            ))
        }
    </div>
</div>
)
export default PreviewJackets;