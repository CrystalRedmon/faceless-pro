import { combineReducers } from 'redux';




const allJobs = (state = [], action) => {
    switch (action.type) {
        case 'SET_JOBS':
            return action.payload;
    }
    return state;
}

const currentJob = (state = [], action) => {
    switch (action.type) {
        case `SET_CURRENT_JOB_POST`:
            return action.payload;

    }
    return state;
}


const editJob = (state = [], action) => {
    switch (action.type) {
        case `SET_EDIT_JOB`:
            return action.payload;
        case `UPDATE_EDIT_JOB`:
            return {
                ...state,
                ...action.payload};
        case `CLEAR_ADD_FIELDS`:
            return '';        
    }
    return state;
}

const applicants = (state = [], action) => {
    switch (action.type) {
        case 'SET_APPLICANTS':
            return action.payload;
    }
    return state;
}

const applicantNotSharedInfo = (state = [], action) => {
    switch (action.type) {
        case 'SET_APPLICANT_NOT_SHARED_INFO':
            return action.payload;
    }
    return state;
}

export default combineReducers({
    allJobs,
    currentJob,
    editJob,
    applicants,
    applicantNotSharedInfo
})