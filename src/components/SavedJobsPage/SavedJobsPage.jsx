import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import SavedJobItem from "./SavedJobItem";
import { Grid, List, Button } from "@mui/material";

function SavedJobsPage() {
  const dispatch = useDispatch();
  const savedJobsList = useSelector((store) => store.candidateReducer.saveJobs);

  useEffect(() => {
    dispatch({ type: "FETCH_SAVED_JOBS" });
    dispatch({ type: 'FETCH_APPLIED_JOBS' });
  }, []);

  return (
    <Grid container spacing={2}>

      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        <Grid item xs={8}>
          <Button variant='contained' onClick={() => { window.history.back() }}>Back</Button>
          <h1>My Saved Jobs</h1>
        </Grid>
        <List>
          {savedJobsList.map((savedJob) =>
            <SavedJobItem key={savedJob.id} savedJob={savedJob} />
          )}
        </List>
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  );
}

export default SavedJobsPage;