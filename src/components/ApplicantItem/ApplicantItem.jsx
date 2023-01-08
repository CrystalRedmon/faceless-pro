import { useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { Typography } from '@mui/material';

function ApplicantItem({ applicant, jobId }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();

    useEffect(() => {
        dispatch({
            type: 'SET_JOB_ID',
            payload: jobId // used to back button for "View Profile" later
        })
    }, [])

    switch (applicant.status) {
        case 'pending':
            return (
                <Box sx={{ borderRadius: '5px', boxShadow: 3, padding: '10px', border: 'solid grey 1px', display: "flex", justifyContent: 'space-between', marginBottom: 2}}>
                    <Box>
                        <Box>
                            <b>Applicant:</b> {applicant.random_identifier}
                        </Box>
                        <Box sx={{ marginTop: 1, marginBottom: 1 }}>
                            <b>Applied on:</b> {new Date(applicant.time).toLocaleString()}
                        </Box>
                        <Box>
                            {/* Status: {applicant.status} */}
                            <b>Status:</b> Pending review
                        </Box>
                    </Box>
                    <Box>
                        <Button
                            variant='contained'
                            onClick={() => { history.push(`/ApplicantProfile/${applicant.id}/${jobId}`) }}
                        >
                            View Profile
                        </Button>
                    </Box>
                </Box>
            );
        case 'not_shared':
            return (
                <Box sx={{ borderRadius: '5px', boxShadow: 3, padding: '10px', border: 'solid grey 1px', display: "flex", justifyContent: 'space-between', marginBottom: 2 }}>
                    <Box>
                        <Box>
                            <b>Applicant:</b> {applicant.random_identifier}
                        </Box>
                        <Box sx={{ marginTop: 1, marginBottom: 1 }}>
                            <b>Applied on:</b> {new Date(applicant.time).toLocaleString()}
                        </Box>
                        <Box>
                            {/* Status: {applicant.status} */}
                            <b>Status:</b> Reviewed
                        </Box>
                    </Box>
                    <Box>
                        <Typography>
                            <Button

                                variant='contained'
                                sx={{ marginBottom: 1 }}
                                onClick={() => { history.push(`/ApplicantProfile/${applicant.id}/${jobId}`) }}
                            >
                                View Profile
                            </Button>
                        </Typography>

                        <Typography>
                            <Button
                                variant='contained'
                                sx={{ width: 137 }}
                                onClick={() => { history.push(`/message/${applicant.id}`) }}
                            >
                                Open Chat
                            </Button>
                        </Typography>
                    </Box>
                </Box>
            );
        case 'shared':
            return (
                <Box sx={{ borderRadius: '5px', boxShadow: 3, padding: '10px', border: 'solid grey 1px', display: "flex", justifyContent: 'space-between', marginBottom: 2 }}>
                    <Box>
                        <Box>
                            <b>Applicant:</b> {applicant.random_identifier}
                        </Box>
                        <Box sx={{ marginTop: 1, marginBottom: 1 }}>
                            <b>Applied on:</b> {new Date(applicant.time).toLocaleString()}
                        </Box>
                        <Box>
                            {/* Status: {applicant.status} */}
                            <b>Status:</b> Additional information shared
                        </Box>
                    </Box>
                    <Box>
                        <Typography>
                            <Button
                            sx={{ marginBottom: 1 }}
                                variant='contained'
                                onClick={() => { history.push(`/ApplicantProfile/${applicant.id}/${jobId}`) }}
                            >
                                View Profile
                            </Button>

                        </Typography>
                        <Typography>
                            <Button
                                sx={{ width: 137 }}
                                variant='contained'
                                onClick={() => { history.push(`/message/${applicant.id}`) }}
                            >
                                Open Chat
                            </Button>
                        </Typography>
                    </Box>
                </Box>
            );
        case 'rejected':
            return (
                <></>
            );
        default:
            <></>
    }
}

export default ApplicantItem