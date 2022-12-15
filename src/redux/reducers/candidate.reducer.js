import { combineReducers } from 'redux';
const recentJobs = (state = [], action) => {
    switch(action.type) {
        case 'SET_RECENT_JOBS':
            return action.payload;
    }
   
    return state;
}


export default combineReducers({
    recentJobs,
})