import React from 'react';
import './previewMen.scss';
import LastChildMen from './LastChild.men';

const PreviewMen = ({title, items})=>(
    <div  className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
        {
            items.map(item=>(
                <LastChildMen
                key={item.id}
                item={item}
                />
            ))
        }
    </div>
</div>
)
export default PreviewMen;