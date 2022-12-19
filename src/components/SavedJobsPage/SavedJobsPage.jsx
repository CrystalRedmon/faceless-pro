import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
function SavedJobsPage() {
    const dispatch = useDispatch();
    const savedJobsList = useSelector(store => store.candidateReducer.saveJobs)
    const history = useHistory()
    console.log('savedJob', savedJobsList)
    useEffect(() => {
        dispatch({ type: 'FETCH_SAVED_JOBS' });
    }, []);
    return (
        <>
            <h1>Saved Jobs</h1>
            <section>

                {savedJobsList.map(job => {
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

                            <p> {job.company_address}</p>
                            <button
                                onClick={() => {
                                    dispatch({
                                        type: 'APPLY_JOB',
                                        payload: job
                                    })
                                }}
                            >APPLY </button>
                            <button
                                onClick={() => {
                                    dispatch({
                                        type: 'DELETE_JOB',
                                        payload: job
                                    })
                                }}
                            >REMOVE </button>
                        </div>
                    )

                })}
            </section>

        </>

    );
}

export default SavedJobsPage