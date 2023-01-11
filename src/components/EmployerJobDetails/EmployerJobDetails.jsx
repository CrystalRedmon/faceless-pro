import { useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Button } from "@mui/material";
import { Box } from '@material-ui/core';



function EmployerJobDetails() {
    const params = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const job = useSelector(store => store.jobs.currentJob);

    // FETCH CURRENT JOB WITH PARAMS ID
    useEffect(() => {
        dispatch({
            type: 'FETCH_CURRENT_JOB_POST',
            payload: `${params.id}`
        })
    }, [])


    const handleBack = () => {
        history.push('/jobList');
    }

    const handleEdit = () => {
        history.push(`/job/${params.id}/edit`)
    }

    return (
            <Grid container spacing={2} >
                <Grid item xs={3}></Grid>
                <Grid item xs={6}>

                    <Box sx={{ display: 'flex' }}>
                        <Button sx={{ marginRight: 1 }} variant='contained' onClick={handleBack}>Back</Button>
                        <Button variant='contained' onClick={handleEdit}>Edit</Button>
                    </Box>

                    <h2>{job.title}</h2>
                    <p className='formatText'>Description:</p>
                    <p className='formatText'>{job.description}</p>

                </Grid>
                <Grid item xs={3}></Grid>
            </Grid>
    );
}


export default EmployerJobDetails;