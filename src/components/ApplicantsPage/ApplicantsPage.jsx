import { useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import List from '@mui/material/List';
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

    // console.log('the applicants', applicants);

    const handleBack = () => {
        history.push('/jobList');
    }

    return (
        <>
            <h1>ApplicantsPage</h1>
            <List>
                {applicants.map(applicant =>
                    <ApplicantItem key={applicant.id} applicant={applicant} jobId={params.id} />
                )}
            </List>
            <button onClick={handleBack}>Back</button>
        </>
    );
}

export default ViewApplicantsPage