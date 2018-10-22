const membersReducer = (state = [], action) => {
    switch(action.type){
        case 'SET_MEMBERLIST':
        return action.payload;
    default:
        return null;
    }
}


export default membersReducer;