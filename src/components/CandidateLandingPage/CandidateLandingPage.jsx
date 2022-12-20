import { useDispatch, useSelector } from 'react-redux';
import React, {useEffect,useState } from 'react';
import { useHistory } from 'react-router-dom';
import './CandidateLandingPage.css';
import CandidateJobItem from '../CandidateJobItem/CandidateJobItem';

function CandidateLandingPage() {
    const recentJobs = useSelector(store => store.candidateReducer.candidateJobs)
    const [keyword, setKeyword] = useState('');
    const [searchJobsClicked, setSearchJobsClicked] = useState(false);

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
          setSearchJobsClicked(true) // This is called a not operator '!'
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
        {searchJobsClicked ? <button onClick={() =>{
               setSearchJobsClicked(false)
                      dispatch({
                        type: 'FETCH_RECENT_JOBS',
                    })
                    }}> Undo Search </button>: <> </>

    }
        
        </form>


        
        <section>
        {searchJobsClicked ? <h3>Searched Jobs</h3>
        :
             <h3>Recently Added Jobs</h3>}

              {recentJobs.map(job =>
                    <CandidateJobItem key={job.id} job={job} />
                )}
          </section>

        </div>
    );
}

export default CandidateLandingPage