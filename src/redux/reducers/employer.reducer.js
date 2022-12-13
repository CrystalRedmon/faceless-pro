const setJobs = (state =['employerName','title','description of job '],action) =>{
    switch (action.type){
        case 'SET_JOB':
            return action.payload
    }
    return state;
}

export default setJobs;