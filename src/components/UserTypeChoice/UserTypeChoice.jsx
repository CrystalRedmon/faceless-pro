import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { useDispatch } from 'react-redux';
import Button from '@material-ui/core/Button';

function UserTypeChoice() {

    const dispatch = useDispatch();

    function handleCandidateChoice() {
        dispatch({
            type: 'UPDATE_USER_TYPE',
            payload: { userType: 'candidate' }
        })
    }

    function handleEmployerChoice() {
        dispatch({
            type: 'UPDATE_USER_TYPE',
            payload: { userType: 'employer' }
        })
    }

    return (
        <Box>

            <Typography sx={{ display: 'flex', justifyContent: 'center' }}>
                <h1>Select a role to continue!</h1>
            </Typography>

            <Box sx={{ display: "flex", justifyContent: 'center' }}>
                <Box sx={{ marginRight: 1 }}>
                    <Button
                        onClick={handleCandidateChoice}
                        variant='contained'
                        color="primary"
                    >
                        job seeker
                    </Button>
                </Box>

                <Box>
                    <Button
                        onClick={handleEmployerChoice}
                        variant='contained'
                        color="primary"
                    >
                        employer
                    </Button>
                </Box>
            </Box>
        </Box>
    );
}

export default UserTypeChoice;