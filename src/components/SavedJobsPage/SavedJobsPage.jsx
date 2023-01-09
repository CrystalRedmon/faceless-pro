import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { PanoramaSharp } from "@mui/icons-material";
import SavedJobItem from "./SavedJobItem";
import { Box } from "@mui/system";
import { Grid, List, Button } from "@mui/material";

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

        <Grid item xs={2}>

        </Grid>
        <Grid item xs={8}>
          <Grid item xs={8}>
            <Button variant='contained' onClick={() => { window.history.back() }}>Back</Button>
            <h1 >Saved Jobs</h1></Grid>
          <List>
            {savedJobsList.map((savedJob) =>
              <SavedJobItem key={savedJob.id} savedJob={savedJob} />
            )}
          </List>
        </Grid>
        <Grid item xs={2}></Grid>
      </Grid>
    </>
  );
}

export default SavedJobsPage;
