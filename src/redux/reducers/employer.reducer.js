




const setJobs = (state = [], action) => {
    switch (action.type) {
        case 'SET_JOBS':
            return action.payload
    }
    return state;
}

export default setJobs;