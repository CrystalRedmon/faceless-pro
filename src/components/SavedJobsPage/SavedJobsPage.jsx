import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { PanoramaSharp } from "@mui/icons-material";
import { Card, Grid, CardContent } from '@mui/material';

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
        <Grid item xs={3}></Grid>
        <Grid item xs={9}
          container
          spacing={2}
          direction="row"
          justify="flex-start"
          alignItems="flex-start"
          mt={5}>
          <section>
            {savedJobsList.map((job) => {
              return (
                <Grid container item xs={12}>
                  <Card variant="outlined" sx={{ width: 275, height: 250, margin: 2, boxShadow: 3 }}>

                    <CardContent>
                      <div key={job.id}>
                        <h4> {job.title} </h4>

                        <p> {job.company_name}</p>

                        <div onClick={submitApplied}>
                          {appliedJobsList.find((c) => c.id === job.id) ? (
                            <p>Applied</p>
                          ) : (
                            <button
                              onClick={() => {
                                dispatch({
                                  type: "APPLY_JOB",
                                  payload: job,
                                });
                                history.push("/applied");
                              }}
                            >
                              APPLY{" "}
                            </button>
                          )}
                        </div>

                        <button
                          onClick={() => {
                            history.push(`/CandidateJobDetails/${job.id}`);
                            dispatch({
                              type: "VIEW_JOB_DETAILS",
                              payload: `${params.id}`,
                            });
                          }}
                        >
                          DETAILS
                        </button>

                        <button
                          onClick={() => {
                            dispatch({
                              type: "DELETE_JOB",
                              payload: job,
                            });
                          }}
                        >
                          REMOVE{" "}
                        </button>
                      </div>
                    </CardContent>
                  </Card>
                </Grid>
              );
            })}
          </section>
        </Grid>
      </Grid>
    </>

  );
}

export default SavedJobsPage;
