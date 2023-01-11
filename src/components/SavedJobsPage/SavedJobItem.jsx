import React from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';



function SavedJobItem({ savedJob }) {

    const dispatch = useDispatch();
    const history = useHistory();

    return (
        <Box >
            <Box sx={{ borderRadius: '5px', boxShadow: 3, padding: '10px', border: 'solid grey 1px', display: "flex", justifyContent: 'space-between', marginBottom: 2 }}>


                <Box>
                    <Box sx={{ marginBottom: 1 }}>
                        <b>Job Title:</b> {savedJob.title}
                    </Box>

                    <Box sx={{ marginBottom: 1 }}>
                        <b>Company Name:</b> {savedJob.company_name}
                    </Box>
                </Box>

                <Box>
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
    )
}

export default SavedJobItem;