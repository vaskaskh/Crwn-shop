import SNEAKERS_DATA from './Sneakers_Data';

const INITIAL_STATE = {
    sneakerItems: SNEAKERS_DATA
}


const sneakersReducer = (state=INITIAL_STATE, action)=>{
    switch(action.type){

        default:
            return state;
    }
}

export default sneakersReducer;