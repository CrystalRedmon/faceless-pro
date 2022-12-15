import { useDispatch, useSelector } from 'react-redux';
import React, {useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import './CandidateLandingPage.css';

function CandidateLandingPage() {
    const recentJobs = useSelector(store => store.candidateReducer.recentJobs)
  
    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_RECENT_JOBS' });
    }, []);
    
    console.log("This is the recent jobs", recentJobs)
    return (
        <div>
        <h1>Candidate Search for Jobs HERE</h1>
        <form>
        <input placeholder = "Search keywords"></input>
        <button>Search</button>
        </form>

        <section>
            <h3>Recently Added Jobs</h3>

            {recentJobs.map(job => {
            return(
                <div key = {job.id}>
                  <h4> {job.title} </h4>
                  
                  <p>  {job.company_name}</p> 
                  
                  <p> {job.company_address}</p>
                  
                  
                  <button> Save </button>         
                  </div> 
            )

        })}


        </section>


        </div>
    );
}

export default CandidateLandingPage