import React from 'react';
import './previewWomen.scss';
import LastChildWomen from './LastChild.women';

const PreviewWomen = ({title, items})=>(
    <div  className='collection-preview'>
    <h1 className='title'>{title.toUpperCase()}</h1>
    <div className='preview'>
        {
            items.map(item=>(
                <LastChildWomen
                key={item.id}
                item={item}
                />
            ))
        }
    </div>
</div>
)
export default PreviewWomen;