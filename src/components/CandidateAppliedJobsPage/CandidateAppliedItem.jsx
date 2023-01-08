import { useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

import Swal from 'sweetalert2';

function CandidateAppliedItem({ job }) {
    const history = useHistory();
    const params = useParams();
    const dispatch = useDispatch();

    console.log('each job', job);
    // console.log('each jobDetailsId', jobDetailsId); // undefined

    function handleShare() {
        Swal.fire({
            title: 'By sharing your information, you are willingly revealing your anonymity to the employer. This action cannot be undone. Do you wish to continue?',
            showDenyButton: true,
            confirmButtonText: 'YES',
            denyButtonText: `NO`,
        }).then((result) => {
            // update status
            if (result.isConfirmed) {
                dispatch({
                    type: "SHARE_INFO",
                    payload: job.application_id
                })
                Swal.fire('Information shared!', '', 'success')
            } else if (result.isDenied) {
                Swal.fire('Changes were not saved', '', 'info')
            }
        })
    }

    switch (job.status) {
        case 'pending':
            return (
                <Box sx={{ borderRadius: '5px', boxShadow: 3, padding: '10px', border: 'solid grey 1px', display: "flex", justifyContent: 'space-between', marginBottom: 2 }}>
                    <Box>
                        <Box sx={{ marginBottom: 1 }}>
                            <b>Company Name:</b> {job.company_name}
                        </Box>
                        <Box>
                            <b>Job Title:</b> {job.title}
                        </Box>
                        <Box sx={{ marginTop: 1, marginBottom: 1 }}>
                            <b>Applied on:</b> {new Date(job.time).toLocaleString()}                        </Box>
                        <Box>
                            {/* Status: {job.status} */}
                            <b>Your application has not been reviewed by the employer</b>
                        </Box>
                    </Box>
                    <Box>
                        <Button
                        variant='contained'
                        sx={{ marginBottom: 1 }}
                        // onClick={() => { history.push(`/job/${job.job_post_id}`) }}
                        >
                            View Job Details
                        </Button>
                    </Box>
                </Box>
            );
        case 'not_shared':
            return (
                <Box sx={{ borderRadius: '5px', boxShadow: 3, padding: '10px', border: 'solid grey 1px', display: "flex", justifyContent: 'space-between', marginBottom: 2 }}>
                    <Box>
                        <Box sx={{ marginBottom: 1 }}>
                            <b>Company Name:</b> {job.company_name}
                        </Box>
                        <Box>
                            <b>Job Title:</b> {job.title}
                        </Box>
                        <Box sx={{ marginTop: 1, marginBottom: 1 }}>
                            <b>Applied on:</b> {new Date(job.time).toLocaleString()}
                        </Box>
                        <Box>
                            {/* Status: {job.status} */}
                            <b>Your anonymous information was reviewed by the employer</b>
                        </Box>
                    </Box>
                    <Box>
                        <Typography>
                            <Button
                                sx={{ marginBottom: 1 }}
                                variant='contained'
                                // onClick={() => { history.push(`/job/${job.job_post_id}`) }}
                            >
                                View Job Details
                            </Button>
                        </Typography>
                        <Typography>
                            <Button
                                sx={{ marginBottom: 1 }}
                                variant="contained"
                                color="primary"
                                onClick={() => {
                                    // dispatch({
                                    //   type: "SET_JOB_MESSAGE",
                                    //   payload: job.id,
                                    // });
                                    history.push(`/message/${job.application_id}`);
                                    // console.log("job", job.application_id);
                                }}
                            >
                                Open Chat
                            </Button>
                        </Typography>
                        <Typography>
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleShare}
                            >
                                Share Information
                            </Button>
                        </Typography>
                    </Box>
                </Box>
            );
        case 'shared':
            return (
                <Box sx={{ borderRadius: '5px', boxShadow: 3, padding: '10px', border: 'solid grey 1px', display: "flex", justifyContent: 'space-between', marginBottom: 2 }}>
                    <Box>
                        <Box sx={{ marginBottom: 1 }}>
                            <b>Company Name:</b> {job.company_name}
                        </Box>
                        <Box>
                            <b>Job Title:</b> {job.title}
                        </Box>
                        <Box sx={{ marginTop: 1, marginBottom: 1 }}>
                            <b>Applied on:</b> {new Date(job.time).toLocaleString()}
                        </Box>
                        <Box>
                            {/* Status: {job.status} */}
                            <b>Your information has been shared with the employer</b>
                        </Box>
                    </Box>
                    <Box>
                        <Typography>
                            <Button
                                variant='contained'
                                sx={{ marginBottom: 1 }}
                                // onClick={() => { history.push(`/job/${job.job_post_id}`) }}
                            >
                                View Job Details
                            </Button>
                        </Typography>
                        <Typography>
                            <Button
                                variant="contained"
                                color="primary"
                                sx={{ marginBottom: 1 }}
                                onClick={() => {
                                    // dispatch({
                                    //   type: "SET_JOB_MESSAGE",
                                    //   payload: job.id,
                                    // });
                                    history.push(`/message/${job.application_id}`);
                                    // console.log("job", job.application_id);
                                }}
                            >
                                Open Chat
                            </Button>
                        </Typography>
                    </Box>
                </Box>
            );
        case 'rejected':
            return (
                <Box sx={{ borderRadius: '5px', boxShadow: 3, padding: '10px', border: 'solid grey 1px', display: "flex", justifyContent: 'space-between', marginBottom: 2 }}>
                    <Box>
                        <Box sx={{ marginBottom: 1 }}>
                            <b>Company Name:</b> {job.company_name}
                        </Box>
                        <Box>
                            <b>Job Title:</b> {job.title}
                        </Box>
                        <Box sx={{ marginTop: 1, marginBottom: 1 }}>
                            <b>Applied on:</b> {new Date(job.time).toLocaleString()}                        </Box>
                        <Box>
                            {/* Status: {job.status} */}
                            <b>You were not selected for this position</b>
                        </Box>
                    </Box>
                    <Box>
                        <Button
                            variant='contained'
                            sx={{ marginBottom: 1 }}
                            // onClick={() => { history.push(`/job/${job.job_post_id}`) }}
                        >
                            View Job Details
                        </Button>
                    </Box>
                </Box>
            );
        default:
            <></>
    }
}

export default CandidateAppliedItem