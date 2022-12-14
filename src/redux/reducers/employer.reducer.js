import { combineReducers } from 'redux';




const allJobs = (state = [], action) => {
    switch (action.type) {
        case 'SET_JOBS':
            return action.payload
    }
    return state;
}






export default combineReducers({
    allJobs,

})