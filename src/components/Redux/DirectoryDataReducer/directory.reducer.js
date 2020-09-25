const INITIAL_STATE={
    sections: [
        {
            title: 'hats',
            imageUrl:'https://images.unsplash.com/photo-1575428652377-a2d80e2277fc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
            linkUrl:'hats',
            id:1 
        },
        {
            title: 'jackets',
            imageUrl:'https://images.unsplash.com/photo-1551488831-00ddcb6c6bd3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
            linkUrl:'jackets',
            id:2   
        },
        {
            title: 'sneakers',
            imageUrl:'https://images.unsplash.com/photo-1552346154-21d32810aba3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
            linkUrl:'sneakers',
            id:3   
        },
        {
            title: 'men',
            imageUrl:'https://images.unsplash.com/photo-1493704099487-36e3c0412f6e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1037&q=80',
            linkUrl:'men',
            id:4   
        },
        {
            title: 'women',
            imageUrl:'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
            linkUrl:'women',
            id:5   
        },
    ]
}


const directoryReducer = (state=INITIAL_STATE, action)=>{
    switch(action.type){
        default:
            return state;
    }
}

export default directoryReducer;