import { useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';

function ApplicantItem({ applicant }) {
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();

    // console.log('applicant', applicant);
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
                        <Button variant='contained' onClick={() => { history.push(`/applicantProfile/${applicant.candidate_id}`) }}>View Profile</Button>
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