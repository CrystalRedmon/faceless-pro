import { useDispatch, useSelector } from 'react-redux';
import React, {useEffect,useState } from 'react';
import { useHistory } from 'react-router-dom';
import './CandidateLandingPage.css';

function CandidateLandingPage() {
    const recentJobs = useSelector(store => store.candidateReducer.recentJobs)
    const searchJobs = useSelector(store => store.candidateReducer.searchJobs)
    const [keyword, setKeyword] = useState('');

    const history = useHistory();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'FETCH_RECENT_JOBS' });
    }, []);

    const handleKeyword=(evt) => {
        setKeyword(evt.target.value)
        console.log(evt)
       }
    function onSubmitKeyword(){
        console.log("keyword",keyword);
        dispatch({
          type: 'FETCH_SEARCHED_JOBS',
          payload: keyword
      });
    
      }

    
    console.log("This is the recent jobs", recentJobs)
    return (
        <div>
        <h1>Candidate Search for Jobs HERE</h1>
        <form>
        <input placeholder = "Search keywords" value = {keyword} onChange={handleKeyword}></input>
        <button onClick={onSubmitKeyword}>Search</button>
        
        </form>


        {/* {searchJobs.length === 0 ? */}
        <section>
            <h3>Recently Added Jobs</h3>

            {recentJobs.map(job => {
            return(
                <div key = {job.id}>
                  <h4> {job.title} </h4>
                  
                  <p>  {job.company_name}</p> 
                  
                  <p> {job.company_address}</p>
                    <button 
                  onClick={() =>{
                      dispatch({
                        type: 'SAVE_JOBS',
                        payload: job
                    })
                    }}
                >Save </button>
                  </div> 
            )

        })}
          </section>

        </div>
    );
}

export default CandidateLandingPage