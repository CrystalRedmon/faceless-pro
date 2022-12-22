import { useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Education from './Education';
import Experience from './Experience';
import Skill from './Skill';
import Hyperlink from './Hyperlink';

import ApplicantNotSharedInfo from './ApplicantNotSharedInfo';

import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import List from '@mui/material/List';

function ApplicantProfile() {

    const applicantNotSharedInfo = useSelector(store => store.jobs.applicantNotSharedInfo);
    const applicant = useSelector(store => store.jobs.applicant);

    useEffect(() => {
        dispatch({
            type: 'FETCH_APPLICANT_NOT_SHARED_INFO',
            payload: `${params.id}`
        })
        dispatch({
            type: 'FETCH_APPLICANT_FROM_APPLICATION_TABLE',
            payload: `${params.id}`
        })
    }, [])

    const params = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    // console.log(`the applicant's not shared info`, applicantNotSharedInfo);
    // console.log(`the applicant info from application table`, applicant);

    return (
        <Box>
            <Button
                variant='contained'
                onClick={() => { history.push(`/viewApplicantsPage/${params.jobId}`) }}
            >
                back
            </Button>

            {/* check to see if status is pending and the object of the applicant (candidate) is not empty */}
            {(applicant.status === 'pending' && Object.keys(applicantNotSharedInfo).length != 0) &&
                <Box>
                    <Button variant='contained'>request chat</Button>
                    <Button variant='contained'>reject</Button>
                    <ApplicantNotSharedInfo applicantNotSharedInfo={applicantNotSharedInfo} />
                </Box>
            }

            {(applicant.status === 'not_shared' && Object.keys(applicantNotSharedInfo).length != 0) &&
                <ApplicantNotSharedInfo applicantNotSharedInfo={applicantNotSharedInfo} />
            }

            {(applicant.status === 'shared' && Object.keys(applicantNotSharedInfo).length != 0) &&
                <Box>
                    <h1>TODO: SHARED INFO HERE</h1>
                    <ApplicantNotSharedInfo applicantNotSharedInfo={applicantNotSharedInfo} />
                </Box>
            }
        </Box>
    );
}

export default ApplicantProfile