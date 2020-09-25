import HATS_DATA from './Hats_Data';

const INITIAL_STATE = {
    hatItems: HATS_DATA
}


const hatsReducer = (state=INITIAL_STATE, action)=>{
    switch(action.type){

        default:
            return state;
    }
}

export default hatsReducer;