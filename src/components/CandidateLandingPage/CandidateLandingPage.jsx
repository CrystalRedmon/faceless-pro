import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import CandidateJobItem from '../CandidateJobItem/CandidateJobItem';
import { Box, Grid, Button } from '@mui/material';
import TextField from '@material-ui/core/TextField';
import ErrorIcon from '@mui/icons-material/Error';

function CandidateLandingPage() {
  const recentJobs = useSelector(store => store.candidateReducer.candidateJobs)
  const [keyword, setKeyword] = useState('');
  const [searchJobsClicked, setSearchJobsClicked] = useState(false);

  const info = useSelector(store => store.candidateReducer.candidateInfo);

  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_RECENT_JOBS' });
    dispatch({ type: 'FETCH_SAVED_JOBS' });
  }, []);

  const handleKeyword = (evt) => {
    setKeyword(evt.target.value)
    console.log(evt)
  }
  function onSubmitKeyword() {
    console.log("keyword", keyword);
    setSearchJobsClicked(true)
    dispatch({
      type: 'FETCH_SEARCHED_JOBS',
      payload: keyword
    });

  }

  const ProfilePage = () => {
    history.push(`/profile`)
  }


  return (
    <Grid
      container
      spacing={2}
    >
      {/* top portion */}
      <Grid item xs={0.5}></Grid>
      <Grid item xs={11}>
        <Box sx={{display: 'flex', alignItems: 'center'}}>
          <h1>Search Jobs</h1>

          {info.id ? <></> :
            <Button sx={{ height: '30px', marginLeft: 1 }} variant='contained' color='error' startIcon={<ErrorIcon />} onClick={ProfilePage}>complete your profile to save and apply to job postings</Button>
          }

        </Box>

        <form>
          <TextField placeholder="Search" value={keyword} onChange={handleKeyword}></TextField>

          <Button
            variant='contained'
            color='secondary'
            onClick={onSubmitKeyword}
            sx={{ marginRight: 1, marginLeft: 1 }}
          >
            search
          </Button>
          {searchJobsClicked ?
            <Button
              onClick={() => { setSearchJobsClicked(false); dispatch({ type: 'FETCH_RECENT_JOBS' }) }}
              variant='outlined'
            >
              undo search
            </Button> : <></>
          }
        </form>
      </Grid>
      <Grid item xs={0.5}></Grid>

      {/* bottom portion */}
      <Grid item xs={0.5}></Grid>
      <Grid
        container
        item xs={11}
      >
        {recentJobs.map(job =>
          <CandidateJobItem key={job.id} job={job} />
        )}
      </Grid>
      <Grid item xs={0.5}></Grid>
    </Grid>
  );
}

export default CandidateLandingPage


