import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
function AppliedToJobsPage() {
  const history = useHistory();
  const params = useParams();
  const dispatch = useDispatch();

  const appliedJobsList = useSelector(
    (store) => store.candidateReducer.candidateJobs
  );
  console.log("Jobs applied to:", appliedJobsList);

  useEffect(() => {
    dispatch({ type: "FETCH_APPLIED_JOBS" });
  }, []);

  return (
    <>
      <h1>AppliedToJobsPage - CANDIDATE</h1>
      <section>
        {appliedJobsList.map((job) => {
          return (
            <Box
              key={job.id}
              sx={{
                border: "solid black 2px",
                display: "flex",
                justifyContent: "space-between",
              }}
            >
              <Box>
                {" "}
                <h4
                  onClick={() => {
                    history.push(`/job/${job.id}`);
                    dispatch({
                      type: "VIEW_JOB_DETAILS",
                      payload: job,
                    });
                  }}
                >
                  {" "}
                  {job.title}{" "}
                </h4>
              </Box>
              <Box>
                <p> {job.company_name}</p>
              </Box>
              <Box>
                <p> {job.logo_path} </p>
              </Box>
              <Box>
                <p> {job.company_address}</p>
              </Box>
              <Box>
                {" "}
                {job.status === "pending" ? (
                  <p>Applied on {new Date(job.time).toLocaleString()}</p>
                ) : (
                  <></>
                )}
              </Box>
              <Box>
                {job.status === "not_shared" ? (
                  <>
                    <p>Applied on {new Date(job.time).toLocaleString()}</p>
                    <button>Chat</button>
                  </>
                ) : (
                  <></>
                )}
              </Box>
              <Box>
                {job.status === "shared" ? (
                  <>
                    <p>Applied on {new Date(job.time).toLocaleString()}</p>
                    <br />
                    <button>Chat</button>
                  </>
                ) : (
                  <></>
                )}
              </Box>
              <Box>
                {job.status === "rejected" ? (
                  <>
                    <p>Applied on {new Date(job.time).toLocaleString()}</p>
                    <br />
                    <p>Not selected for this position</p>
                  </>
                ) : (
                  <></>
                )}
              </Box>

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
            </Box>
          );
        })}
      </section>
    </>
  );
}

export default AppliedToJobsPage;
