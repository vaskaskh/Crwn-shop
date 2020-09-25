import JACKETS_DATA from './Jackets_Data';

const INITIAL_STATE = {
    jacketItems: JACKETS_DATA
}


const jacketReducer = (state=INITIAL_STATE, action)=>{
    switch(action.type){

        default:
            return state;
    }
}

export default jacketReducer;