import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
function AppliedToJobsPage() {
    const history = useHistory();
    const params = useParams();
    const dispatch = useDispatch();

    const appliedJobsList = useSelector(store => store.candidateReducer.candidateJobs);
    console.log('Jobs applied to:',appliedJobsList)
    useEffect(() => {
        dispatch({ type: 'FETCH_APPLIED_JOBS'});
    }, []);
    
    return (
        <>
        <h1>AppliedToJobsPage - CANDIDATE</h1>
        <section>

{appliedJobsList.map(job => {
    return (
        <div key={job.id} >
            <h4 onClick={() => {
                history.push(`/job/${job.id}`)
                    dispatch({
                        type: 'VIEW_JOB_DETAILS',
                        payload: job
                    })
                }}> {job.title} </h4>

            <p>  {job.company_name}</p>
            <p>  {job.logo_path} </p>
            <p> {job.company_address}</p>
            <p>  {job.time} </p>
            <p>  {job.status}</p>
            <button>Chat </button>
        </div>
    )

})}
</section>
        </>
    );
}

export default AppliedToJobsPage