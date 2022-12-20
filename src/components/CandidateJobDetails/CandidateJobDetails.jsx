import { useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';


function CandidateJobDetails() {
    const params = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const job = useSelector(store => store.candidateReducer.candidateJobs);
    console.log('current job details: ', job);

    //FETCH CURRENT JOB WITH PARAMS ID
    useEffect(() => {
        dispatch({
            type: 'VIEW_JOB_DETAILS',
            payload: `${params.id}`
        })
        // console.log(params.id)

    }, [])

 console.log("params.id is...", params.id)
    const handleBack = () => {
        history.push('/');
    }


    return (
        <>
        <h1>Candidate Job Details</h1>
            <button onClick = {handleBack}>Back</button>
            <br></br>
            <h2>Company Logo:{job[0].logo_path}</h2>
            <br></br>
            <h2>Company Name:{job[0].company_name}</h2>
            <br></br>
            <h2>Company Address:{job[0].company_address}</h2>
            <br></br>
            <br></br>

        

            <h2>Job Title:{job[0].title}</h2>
            <br></br>
            <p> Job Description:{job[0].description}</p> 

            <button>*These two buttons don't work yet* Apply</button>
            <button>Save</button>
        </>
    );
}


export default CandidateJobDetails;