import React, { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
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
    (store) => store.candidateReducer.appliedJobs
  );
  console.log("Jobs applied to:", appliedJobsList);

  useEffect(() => {
    dispatch({ type: "FETCH_APPLIED_JOBS" });
  }, []);


const useStyles = makeStyles({
  table: {
    tableLayout: "fixed",
    width: "100%",
  },
  td: {
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap",
  },
});

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
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        dispatch({
                          type: "SET_JOB_MESSAGE",
                          payload: job.id,
                        });
                        history.push(`/message/${job.id}`);
                        console.log("application id:", job.id);
                      }}
                    >
                      Chat
                    </Button>
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        console.log("Sharing info for job id:",job.id)
                        dispatch({
                          type: "SHARE_INFO",
                          payload: job.id
                          
                        })
                      }}
                    >
                      Share Information
                    </Button>
                  </>
                ) : (
                  <></>
                )}
              </Box>
              <Box>
                {job.status === "shared" ? (
                  <>
                    <p>Person info shared with employer-Applied on {new Date(job.time).toLocaleString()}</p>
                    <br />
                    <Button
                      variant="contained"
                      color="primary"
                      onClick={() => {
                        dispatch({
                          type: "SET_JOB_MESSAGE",
                          payload: job.id,
                        });
                        history.push(`/message/${job.id}`);
                        console.log("application id:", job.id);
                      }}
                    >
                      Chat
                    </Button>
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


