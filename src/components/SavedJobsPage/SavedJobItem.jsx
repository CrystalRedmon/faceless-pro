import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { PanoramaSharp } from "@mui/icons-material";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Typography, Grid } from '@mui/material';


function SavedJobItem({ savedJob }) {

    const dispatch = useDispatch();
    const savedJobsList = useSelector((store) => store.candidateReducer.saveJobs);
    const appliedJobsList = useSelector(
        (store) => store.candidateReducer.candidateJobs
    );
    const history = useHistory();

    function submitApplied() {
        dispatch({
            type: 'FETCH_APPLIED_JOBS',
        });
    }

    return (<>

        <Box >
            <Box sx={{ borderRadius: '5px', boxShadow: 3, padding: '10px', border: 'solid grey 1px', display: "flex", justifyContent: 'space-between', marginBottom: 2 }}>


                <Box>
                    <Box sx={{ marginBottom: 1, marginTop: '15%'}}>
                        <b>Job Title:</b> {savedJob.title}
                    </Box>

                    <Box sx={{ marginTop: '15%' }}>
                        <b>Company Name:</b> {savedJob.company_name}
                    </Box>
                </Box>

                <Box>


                    <Box onClick={submitApplied}>
                        {appliedJobsList.find((c) => c.id === savedJob.id) ? (
                            <p>Applied</p>
                        ) : (
                            <Button
                                variant='contained'
                                sx={{ marginBottom: 1 }}
                                onClick={() => {
                                    dispatch({
                                        type: "APPLY_JOB",
                                        payload: savedJob,
                                    });
                                    history.push("/applied");
                                }}
                            >
                                APPLY{" "}
                            </Button>
                        )}

                    </Box>


                    <Box>
                        <Button
                            variant='contained'
                            sx={{ marginBottom: 1 }}
                            onClick={() => {
                                history.push(`/CandidateJobDetails/${savedJob.id}`);
                                dispatch({
                                    type: "VIEW_JOB_DETAILS",
                                    payload: `${savedJob.id}`,
                                });
                            }}
                        >
                            DETAILS
                        </Button>
                    </Box>

                    <Box>
                        <Button
                            variant='contained'
                            sx={{ marginBottom: 1 }}
                            onClick={() => {
                                dispatch({
                                    type: "DELETE_JOB",
                                    payload: savedJob,
                                });
                            }}
                        >
                            REMOVE{" "}
                        </Button>


                    </Box>
                </Box>
            </Box>
        </Box>

    </>)
}

export default SavedJobItem;