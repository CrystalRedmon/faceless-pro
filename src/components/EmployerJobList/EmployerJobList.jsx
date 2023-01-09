import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import UserTypeChoice from '../UserTypeChoice/UserTypeChoice';
import { useDispatch } from 'react-redux';
import EmployerJobItem from '../EmployerJobItem/EmployerJobItem';
import { useHistory, Link } from 'react-router-dom';
import { InputLabel, Button, Grid, Typography } from "@mui/material"
import Box from '@mui/material/Box';
import AddCircleIcon from '@mui/icons-material/AddCircle';


function EmployerJobList() {

    const dispatch = useDispatch();
    const jobs = useSelector((store) => store.jobs.allJobs);
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'FETCH_JOBS' });
    }, []);

    // console.log('all of the jobs', jobs);

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
                <h1>Posted Jobs</h1>
                <Typography>
                    <Button variant='contained' startIcon={<AddCircleIcon />} onClick={handleAddJob}>add new job</Button>
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

                {/* <table width='100%'>
                    <thead>
                        <tr>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                            <th scope="col"></th>
                        </tr>
                    </thead>
                    <tbody>
                        {jobs.map(job =>
                            <EmployerJobItem key={job.id} job={job} />
                        )}
                    </tbody>
                </table> */}

            </Grid>

            <Grid item xs={0.5}></Grid>
        </Grid>
    );
}

export default EmployerJobList;