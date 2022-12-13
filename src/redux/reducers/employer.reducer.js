const setJobs = (state = [], action) => {
    switch (action.type) {
        case 'SET_JOB':
            return action.payload
    }
    return state;
}

export default setJobs;