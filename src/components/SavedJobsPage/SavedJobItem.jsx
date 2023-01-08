import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { PanoramaSharp } from "@mui/icons-material";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';


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
        <h1>This is an job item</h1>
        <Box sx={{ borderRadius: '5px', boxShadow: 3, padding: '10px', border: 'solid grey 1px', display: "flex", justifyContent: 'space-between', marginBottom: 2 }}>


            <Box sx={{ marginBottom: 1 }}>
                {savedJob.title}
            </Box>

            <Box sx={{ marginBottom: 1 }}>
                {savedJob.company_name}
            </Box>

            <Box onClick={submitApplied}>
                {appliedJobsList.find((c) => c.id === savedJob.id) ? (
                    <p>Applied</p>
                ) : (
                    <Button
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
                    onClick={() => {
                        history.push(`/CandidateJobDetails/${savedJob.id}`);
                        dispatch({
                            type: "VIEW_JOB_DETAILS",
                            payload: `${params.id}`,
                        });
                    }}
                >
                    DETAILS
                </Button>
            </Box>

            <Box>
            <Button
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
        {/* <div key={job.id}>
            <h4> {job.title} </h4>

            <p> {job.company_name}</p>

            <p> {job.company_address}</p>

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
        </div> */}





    </>)
}

export default SavedJobItem;