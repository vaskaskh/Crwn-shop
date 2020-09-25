import React from 'react';
import './directory.scss';
import MenuItem from '../menu-item/menu-item';
import {connect} from 'react-redux';



const Directory=({sections})=>{
    return(

        <div className='directory-menu'>
            {
                sections.map(({ id,...otherSectionProps})=>(
                    <MenuItem
                    key={id}
                    {...otherSectionProps}
                
                    />
                ))
            }    
        </div>
    )
}

const mapStateToProps = state =>({
    sections: state.directory.sections
})

export default connect(mapStateToProps)(Directory);