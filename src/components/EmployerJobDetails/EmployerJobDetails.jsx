import { useParams, useHistory, Link } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Grid, Button, Typography } from "@mui/material";



function EmployerJobDetails() {
    const params = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const job = useSelector(store => store.jobs.currentJob);
    // console.log('current job details: ', job);

    //FETCH CURRENT JOB WITH PARAMS ID
    useEffect(() => {
        dispatch({
            type: 'FETCH_CURRENT_JOB_POST',
            payload: `${params.id}`
        })
        // console.log(params.id)

    }, [])


    const handleBack = () => {
        history.push('/jobList');
    }

    const handleEdit = () => {
        history.push(`/job/${params.id}/edit`)
    }


    return (
        <>
            <Grid container spacing={2} >
                <Grid item xs={3}></Grid>
                <Grid item xs={6}>
                    <Grid item xs={6}><Link variant='contained' onClick={handleBack}>Back</Link> </Grid> 
                    <Grid item xs={6}><Link variant='contained' onClick={handleEdit}>Edit</Link></Grid>
                    
                    <h2>Title: {job.title}</h2>
                    <p className='formatText'>Description:{job.description}</p>
                </Grid>
            </Grid>
        </>
    );
}


export default EmployerJobDetails;