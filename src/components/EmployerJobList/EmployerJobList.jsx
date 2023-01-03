import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import UserTypeChoice from '../UserTypeChoice/UserTypeChoice';
import { useDispatch } from 'react-redux';
import EmployerJobItem from '../EmployerJobItem/EmployerJobItem';
import { useHistory } from 'react-router-dom';
import { InputLabel, Button, Grid } from "@mui/material"


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
    return <>
        <Grid container spacing={2}>
            <Grid item xs={3}></Grid>
            <Grid item xs={9}>
                <h1>Open Job Posts <Button variant='contained' onClick={handleAddJob}>Add New Job</Button></h1>
            </Grid>
            <Grid item xs={2}></Grid>
            <Grid item xs={8}>


                <table width='100%'>
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
                </table>
            </Grid>
            <Grid item xs={2}></Grid>
        </Grid>
    </>
}

export default EmployerJobList;