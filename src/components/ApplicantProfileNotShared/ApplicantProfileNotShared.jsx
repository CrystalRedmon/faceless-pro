import { useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import List from '@mui/material/List';

function ApplicantNotShared() {

    const applicant = useSelector(store => store.jobs.applicantNotSharedInfo);

    useEffect(() => {
        dispatch({
            type: 'FETCH_APPLICANT_NOT_SHARED_INFO',
            payload: `${params.id}`
        })
    }, [])

    const params = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    console.log(`the applicant's info`, applicant);

    return (
        <Box>
            <Button variant='contained'>accept</Button>
            <Button variant='contained'>reject</Button>
            <List>
                <h1>Applicant's not_shared info here! See console.log!</h1>
            </List>
        </Box>
    );
}

export default ApplicantNotShared