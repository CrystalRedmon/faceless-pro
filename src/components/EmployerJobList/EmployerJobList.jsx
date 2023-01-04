import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import UserTypeChoice from '../UserTypeChoice/UserTypeChoice';
import { useDispatch } from 'react-redux';
import EmployerJobItem from '../EmployerJobItem/EmployerJobItem';
import { useHistory } from 'react-router-dom';
import { InputLabel, Button, Grid, Link } from "@mui/material"


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
            <Grid item xs={4.5}></Grid>
            <Grid item xs={6.5}>
                <h1>Open Job Posts</h1>
                <Link variant='contained' onClick={handleAddJob} marginLeft={9}>Add New Job</Link>
            </Grid>
            <Grid item xs={1.5}></Grid>
            <Grid container
                spacing={2}
                item xs={9}
                direction="row"
                justify="flex-start"
                alignItems="flex-start"
                mt={5}>
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
            <Grid item xs={1}></Grid>
        </Grid>
    </>
}

export default EmployerJobList;