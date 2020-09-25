const INITIAL_STATE = {
    currentUser: null
}

const authReducer = (state=INITIAL_STATE, action)=>{
    switch(action.type){
        case 'SET_USER':
            return{
                currentUser: action.payload.currentUser
            } 
        case 'CLEAR_USER':
            return{
                currentUser: null
            }
        default:
            return state
    }
}

export default authReducer;