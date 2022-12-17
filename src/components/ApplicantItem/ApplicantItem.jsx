import React from 'react';
import { useDispatch } from 'react-redux';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function ApplicantItem({ applicant }) {
    const dispatch = useDispatch();

    // TODO: view applicant profile based on applicant state
    // TODO: open chat based on applicant state
    // TODO: add more "cases" for the state of the game
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
                        <Button variant='contained'>View Applicant</Button>
                    </Box>

                </Box>
            )
    }
}

export default ApplicantItem