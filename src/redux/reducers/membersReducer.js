const membersReducer = (state = [], action) => {
    switch(action.type){
        case 'SET_MEMBERS':
        return action.payload;
    default:
        return state;
    }
}


export default membersReducer;