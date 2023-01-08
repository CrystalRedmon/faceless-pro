import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { PanoramaSharp } from "@mui/icons-material";
import SavedJobItem from "./SavedJobItem";

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
      <h1>Saved Jobs</h1>
      <section>
        {savedJobsList.map((savedJob) => {
          return (
            <SavedJobItem key={savedJob.id} savedJob={savedJob}/>
          );
        })}
      </section>
    </>
  );
}

export default SavedJobsPage;
