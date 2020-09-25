import WOMEN_DATA from './Women_Data';

const INITIAL_STATE = {
    womenItems: WOMEN_DATA
}


const womenReducer = (state=INITIAL_STATE, action)=>{
    switch(action.type){

        default:
            return state;
    }
}

export default womenReducer;