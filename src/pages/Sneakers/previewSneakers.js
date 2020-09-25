import React from 'react';
import './previewSneakers.scss';
import LastChildSneakers from './LastChildSneakers';

const PreviewSneakers = ({title, items})=>(
    <div  className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
        {
            items.map(item=>(
                <LastChildSneakers
                key={item.id}
                item={item}
                />
            ))
        }
    </div>
</div>
)
export default PreviewSneakers;