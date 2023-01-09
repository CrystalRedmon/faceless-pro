import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
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

                {/* <Box onClick={handleCandidateChoice} sx={{ width: '10em', height: '5em', borderRadius: '5px', boxShadow: 3, padding: '10px', border: 'solid grey 1px', display: "flex", justifyContent: 'center', alignItems: 'center', marginBottom: 2, marginRight: '5em' }}>
                    <Typography>
                        <b>Job Seeker</b>
                    </Typography>
                </Box>

                <Box onClick={handleEmployerChoice} sx={{ width: '10em', height: '5em', borderRadius: '5px', boxShadow: 3, padding: '10px', border: 'solid grey 1px', display: "flex", justifyContent: 'center', alignItems: 'center', marginBottom: 2 }}>
                    <Typography>
                        <b>Employer</b>
                    </Typography>
                </Box> */}
                <Box sx={{marginRight: 1}}>
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


                {/* <Card sx={{ maxWidth: 345, marginRight: '5em' }}>
                <CardActionArea onClick={handleCandidateChoice}>
                    <CardMedia
                        component="img"
                        height="140"
                        // image="/static/images/cards/contemplative-reptile.jpg"
                        alt="candidate"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Candidate
                        </Typography>
                        {/* <Typography variant="body2" color="text.secondary">
                            Candidate
                        </Typography> */}
                {/* </CardContent>
                </CardActionArea>
            </Card>  */}

                {/* <Card sx={{ maxWidth: 345 }}>
                <CardActionArea onClick={handleEmployerChoice}>
                    <CardMedia
                        component="img"
                        height="140"
                        // image="/static/images/cards/contemplative-reptile.jpg"
                        alt="employer"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            Employer
                        </Typography>
                        {/* <Typography variant="body2" color="text.secondary">
                            Employer
                        </Typography> */}
                {/* </CardContent>
                </CardActionArea>
            </Card> */}
            </Box>
        </Box>
    );
}

export default UserTypeChoice;