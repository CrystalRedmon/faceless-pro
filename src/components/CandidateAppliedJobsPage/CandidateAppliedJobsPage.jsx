import React from "react";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { List, Grid, Button } from '@mui/material';
import CandidateAppliedItem from "./CandidateAppliedItem";

function AppliedToJobsPage() {

  const dispatch = useDispatch();

  const appliedJobsList = useSelector(
    (store) => store.candidateReducer.appliedJobs
  );

  useEffect(() => {
    dispatch({ type: "FETCH_APPLIED_JOBS" });
  }, []);

  return (
    <Grid container spacing={2}>
      <Grid item xs={2}></Grid>
      <Grid item xs={8}>
        <Button variant='contained' onClick={() => { window.history.back() }}>Back</Button>
        <h1>My Applied Jobs</h1>
        <List>
          {appliedJobsList.map(job =>
            <CandidateAppliedItem key={job.application_id} job={job} />
          )}
        </List>
      </Grid>
      <Grid item xs={2}></Grid>
    </Grid>
  );
}

export default AppliedToJobsPage;