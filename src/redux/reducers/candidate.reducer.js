
import { combineReducers } from 'redux';

const candidateJobs = (state = [], action) => {
    switch (action.type) {
        case 'SET_JOBS':
            return action.payload;

    }

    return state;
}

const saveJobs = (state = [], action) => {
    switch (action.type) {
        case 'SET_SAVED_JOBS':
            return action.payload;
    }

    return state;
}


const saveProfile = (state = [], action) => {
    switch (action.type) {
        case 'ADD_PROFILE':
            return action.payload;
    }
    return state;
}
const appliedJobs = (state = [], action) => {
    switch (action.type) {
        case 'SET_APPLIED_JOBS':
            return action.payload;

    }

    return state;
}


// const searchJobs = (state = [], action) => {
//     switch(action.type) {
//         case 'SET_SEARCHED_JOBS':
//             return action.payload;
//     }

//     return state;
// }

const messageList = (state = [], action) => {
    switch (action.type) {
        case 'SET_MESSAGE':
            return action.payload;
    }

    return state;
}

const jobMessage = (state = [], action) => {
    switch (action.type) {
        case 'SET_JOB_MESSAGE':
            return action.payload
    }
    return state;
}

const candidateInfo = (state ={},action) =>{
    switch (action.type){
        case 'SET_EDIT_PROFILE':
            return action.payload
            case 'UPDATE_EDIT_PROFILE':
                return {
                    ...state,
                    ...action.payload
                };
    }
    return state;
}

export default combineReducers({
    candidateJobs,
    saveJobs,
    saveProfile,
    appliedJobs,
    messageList,
    jobMessage,
    candidateInfo,


})



