import { combineReducers } from 'redux';
const recentJobs = (state = [], action) => {
    switch(action.type) {
        case 'SET_RECENT_JOBS':
            return action.payload;
    }
   
    return state;
}

const saveJobs = (state = [], action) => {
    switch(action.type) {
        case 'FETCH_SAVE_JOBS':
            return action.payload;
    }
   
    return state;
}

const searchJobs = (state = [], action) => {
    switch(action.type) {
        case 'SET_SEARCHED_JOBS':
            return action.payload;
    }
   
    return state;
}

export default combineReducers({
    recentJobs,
    saveJobs,
    searchJobs,
})