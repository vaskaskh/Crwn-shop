import React from 'react';
import './preview.scss';
import PreviewBottom from './PreviewBottom';


const PreviewCollection = ({title,items, id})=>(
    <div  className='collection-preview'>
        <h1 className='title'>{title.toUpperCase()}</h1>
        <div className='preview'>
            {
                items.filter((item, idx)=> idx<5).map(item=>(
                    <PreviewBottom
                    key={item.id}
                    item={item}
                    />
                ))
            }
        </div>
    </div>
)

export default PreviewCollection