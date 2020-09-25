import React from 'react';
import './previewHats.scss';
import LastChildHats from './LastChild.hats';

const PreviewHats = ({title, items})=>(
    <div  className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
        {
            items.map(item=>(
                <LastChildHats
                key={item.id}
                item={item}
                />
            ))
        }
    </div>
</div>
)
export default PreviewHats;