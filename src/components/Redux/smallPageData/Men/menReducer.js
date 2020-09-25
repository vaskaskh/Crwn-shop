import MEN_DATA from './Men_Data';

const INITIAL_STATE = {
    menItems: MEN_DATA
}


const menReducer = (state=INITIAL_STATE, action)=>{
    switch(action.type){

        default:
            return state;
    }
}

export default menReducer;