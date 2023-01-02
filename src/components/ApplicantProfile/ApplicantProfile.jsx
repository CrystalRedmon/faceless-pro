import { useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Education from './Education';
import Experience from './Experience';
import Skill from './Skill';
import Hyperlink from './Hyperlink';

import ApplicantNotSharedInfo from './ApplicantNotSharedInfo';
import ApplicantSharedInfo from './ApplicantSharedInfo';

import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import List from '@mui/material/List';

function ApplicantProfile() {

    // const applicantNotSharedInfo = useSelector(store => store.jobs.applicantNotSharedInfo);
    // const applicantSharedInfo = useSelector(store => store.jobs.applicantSharedInfo);
    // const applicant = useSelector(store => store.jobs.applicant);

    useEffect(() => {
        dispatch({
            type: 'FETCH_APPLICANT',
            payload: `${params.id}`
        })
    }, [])

    const params = useParams();
    const dispatch = useDispatch();
    const history = useHistory();

    function handleReject() {
        // update status
        dispatch({
            type: 'UPDATE_APPLICATION_STATUS',
            payload: {
                id: applicant.id,
                newStatus: 'rejected'
            }
        })
        // then go back to the viewApplicantsPage
        // BUG: Sometimes it will remove the applicant from the list. Refresh page.
        history.push(`/viewApplicantsPage/${params.jobId}`)
    }


    // console.log(`the applicant's not shared info`, applicantNotSharedInfo);
    // console.log(`the applicant's shared info`, applicantNotSharedInfo);
    // console.log(`the applicant info from application table`, applicant);

    return (
        // <Box>
        //     <Button
        //         variant='contained'
        //         onClick={() => { history.push(`/viewApplicantsPage/${params.jobId}`) }}
        //     >
        //         back
        //     </Button>

        //     {/* check to see if status is pending and the object of the applicant (candidate) is not empty */}
        //     {(applicant.status === 'pending' && Object.keys(applicantNotSharedInfo).length != 0) &&
        //         <Box>
        //             <Button
        //                 variant='contained'
        //                 onClick={() => {
        //                     dispatch({
        //                         type: 'UPDATE_APPLICATION_STATUS',
        //                         payload: {
        //                             id: applicant.id,
        //                             newStatus: 'not_shared'
        //                         }
        //                     })

        //                 }}
        //             >
        //                 request chat
        //             </Button>
        //             <Button
        //                 variant='contained'
        //                 onClick={handleReject}
        //             >
        //                 reject
        //             </Button>

        //             {/* refactored */}
        //             <ApplicantNotSharedInfo applicantNotSharedInfo={applicantNotSharedInfo} applicant={applicant} />

        //         </Box>
        //     }

        //     {(applicant.status === 'not_shared' && Object.keys(applicantNotSharedInfo).length != 0) &&
        //         <ApplicantNotSharedInfo applicantNotSharedInfo={applicantNotSharedInfo} applicant={applicant} />
        //     }

        //     {(applicant.status === 'shared' && Object.keys(applicantNotSharedInfo).length != 0) &&
        //         <Box>
        //             <ApplicantSharedInfo applicantSharedInfo={applicantSharedInfo} />
        //             <ApplicantNotSharedInfo applicantNotSharedInfo={applicantNotSharedInfo} applicant={applicant} />
        //         </Box>
        //     }
        // </Box>
        <Box>
            hi
        </Box>
    );
}

export default ApplicantProfile