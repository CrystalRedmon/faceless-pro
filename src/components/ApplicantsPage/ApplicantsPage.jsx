import { useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { List, Grid, Button } from '@mui/material';
import ApplicantItem from '../ApplicantItem/ApplicantItem';

function ViewApplicantsPage() {
    const history = useHistory();
    const params = useParams();
    const dispatch = useDispatch();

    const applicants = useSelector(store => store.jobs.applicants);


    useEffect(() => {
        dispatch({
            type: 'FETCH_APPLICANTS',
            payload: `${params.id}` // job.id
        })
    }, [])

    const handleBack = () => {
        history.push('/jobList');
    }

    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={2}></Grid>
                <Grid item xs={8}>
                <Button variant='contained' onClick={handleBack}>Back</Button>
                    <h1>Applicant Review</h1>
                    <List>
                        {applicants.map(applicant =>
                            <ApplicantItem key={applicant.id} applicant={applicant} jobId={params.id} />
                        )}
                    </List>
                </Grid>
                <Grid item xs={2}></Grid>
            </Grid>
        </>
    );
}

export default ViewApplicantsPage