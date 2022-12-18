import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function ApplicantItem({ applicant }) {
    const dispatch = useDispatch();

    // TODO: view applicant profile based on applicant state
    // TODO: open chat based on applicant state
    // TODO: add more "cases" for the state of the game

    console.log('applicant', applicant);
    switch (applicant.status) {
        case 'pending':
            return (
                <Box sx={{ border: 'solid black 2px', display: "flex", justifyContent: 'space-between' }}>
                    <Box>
                        <Box>
                            Applicant: {applicant.random_identifier}
                        </Box> <br />

                    </Box>
                    <Box>
                        <Box>
                            {applicant.time}
                        </Box>
                        <Box>
                            {applicant.status}
                        </Box>
                        <Button variant='contained'>View Profile</Button>
                    </Box>

                </Box>
            );
        case 'not_shared':
            return (
                <Box sx={{ border: 'solid black 2px', display: "flex", justifyContent: 'space-between' }}>
                    <Box>
                        <Box>
                            Applicant: {applicant.random_identifier}
                        </Box> <br />

                    </Box>
                    <Box>
                        <Box>
                            {applicant.time}
                        </Box>
                        <Box>
                            {applicant.status}
                        </Box>
                        <Button variant='contained'>Open Chat</Button>
                        <Button variant='contained'>View Profile</Button>
                    </Box>

                </Box>
            );
        case 'shared':
            return (
                <Box sx={{ border: 'solid black 2px', display: "flex", justifyContent: 'space-between' }}>
                    <Box>
                        <Box>
                            Applicant: {applicant.random_identifier}
                        </Box> <br />

                    </Box>
                    <Box>
                        <Box>
                            {applicant.time}
                        </Box>
                        <Box>
                            {applicant.status}
                        </Box>
                        <Button variant='contained'>Open Chat</Button>
                        <Button variant='contained'>View Profile</Button>
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