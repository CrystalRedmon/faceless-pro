import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import EmployerJobItem from '../EmployerJobItem/EmployerJobItem';
import { useHistory } from 'react-router-dom';
import { Button, Grid, Typography } from "@mui/material"
import AddCircleIcon from '@mui/icons-material/AddCircle';


function EmployerJobList() {

    const dispatch = useDispatch();
    const jobs = useSelector((store) => store.jobs.allJobs);
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'FETCH_JOBS' });
    }, []);

    const handleAddJob = () => {
        history.push('/jobForm')
    }

    return (
        <Grid
            container
            spacing={2}
        >
            {/* top portion */}
            <Grid item xs={0.5}></Grid>
            <Grid item xs={11}>
                <h1>Posted Positions</h1>
                <Typography>
                    <Button variant='contained' startIcon={<AddCircleIcon />} onClick={handleAddJob}>add new position</Button>
                </Typography>
            </Grid>
            <Grid item xs={0.5}></Grid>

            {/* bottom portion */}
            <Grid item xs={0.5}></Grid>
            <Grid
                container
                item xs={11}
            >
                {jobs.map(job =>
                    <EmployerJobItem key={job.id} job={job} />
                )}
            </Grid>

            <Grid item xs={0.5}></Grid>
        </Grid>
    );
}

export default EmployerJobList;