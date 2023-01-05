
// import CandidateProfile from "../CandidateProfile/CandidateProfile";
// import CandidateProfilePage from "../CandidateProfilePage/CandidateProfilePage";
// import { useSelector } from 'react-redux';


// function CandidateLandingPage() {
//     const user = useSelector((store) => store.user);

//     // They should only be able to view info. 
//     return (
//         <>
//             {user.user_info != null ? <CandidateProfilePage /> : <CandidateProfile />}
//         </>
//     );
// }

// export default CandidateLandingPage





import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './CandidateLandingPage.css';
import CandidateJobItem from '../CandidateJobItem/CandidateJobItem';
import { Box, Grid } from '@mui/material';

function CandidateLandingPage() {
  const recentJobs = useSelector(store => store.candidateReducer.candidateJobs)
  const [keyword, setKeyword] = useState('');
  const [searchJobsClicked, setSearchJobsClicked] = useState(false);

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_RECENT_JOBS' });
  }, []);

  const handleKeyword = (evt) => {
    setKeyword(evt.target.value)
    console.log(evt)
  }
  function onSubmitKeyword() {
    console.log("keyword", keyword);
    setSearchJobsClicked(true) // This is called a not operator '!'
    dispatch({
      type: 'FETCH_SEARCHED_JOBS',
      payload: keyword
    });

  }

  console.log("This is the recent jobs", recentJobs)
  return (
    <div>
      <Box sx={{ textAlign: 'center' }}>

        <h1>Candidate Search for Jobs HERE</h1>
        <form>
          <input placeholder="Search keywords" value={keyword} onChange={handleKeyword}></input>

          <button onClick={onSubmitKeyword}>Search</button>
          {searchJobsClicked ? <button onClick={() => {
            setSearchJobsClicked(false)
            dispatch({
              type: 'FETCH_RECENT_JOBS',
            })
          }}> Undo Search </button> : <> </>

          }

        </form>
      </Box>
      <Grid container spacing={2}>
        <Grid item xs={5.25}></Grid>


        <Grid item xs={6.75}>
          {searchJobsClicked ? <h3>Searched Jobs</h3>
            :
            <h3>Recently Added Jobs</h3>}
        </Grid>
        <Grid item xs={2}></Grid>
        <Grid container item xs={10}>
          {recentJobs.map(job =>
            <CandidateJobItem key={job.id} job={job} />
          )}
        </Grid>



      </Grid>
    </div>
  );
}

export default CandidateLandingPage


