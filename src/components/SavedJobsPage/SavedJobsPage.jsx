import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { PanoramaSharp } from "@mui/icons-material";
import { Card, Grid, CardContent } from '@mui/material';
import SavedJobItem from "../SavedJobItem/SavedJobItem";

function SavedJobsPage() {
  const dispatch = useDispatch();
  const savedJobsList = useSelector((store) => store.candidateReducer.saveJobs);
  const appliedJobsList = useSelector(
    (store) => store.candidateReducer.candidateJobs
  );
  const history = useHistory();

  console.log("savedJob", savedJobsList);
  useEffect(() => {
    dispatch({ type: "FETCH_SAVED_JOBS" });
    dispatch({ type: 'FETCH_APPLIED_JOBS' });
  }, []);

  function submitApplied() {
    dispatch({
      type: 'FETCH_APPLIED_JOBS',
    });
  }

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={5}></Grid>
        <Grid item xs={7}><h1>Saved Jobs</h1></Grid>
        <Grid item xs={2}></Grid>
        <Grid container item xs={9}>

          {savedJobsList.map(job =>
            <SavedJobItem key={job.id} job={job} />
          )}

        </Grid>
      </Grid>
    </>

  );
}

export default SavedJobsPage;
