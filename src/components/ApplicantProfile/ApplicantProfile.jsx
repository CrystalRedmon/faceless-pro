import { useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import ApplicantNotSharedInfo from './ApplicantNotSharedInfo';
import ApplicantSharedInfo from './ApplicantSharedInfo';

import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import Swal from 'sweetalert2';


function ApplicantProfile() {

    const applicant = useSelector(store => store.jobs.applicantInfo);

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
        Swal.fire({
            title: 'Are you sure you want to reject this application?',
            showDenyButton: true,
            confirmButtonText: 'YES',
            denyButtonText: `NO`,
        }).then((result) => {
            if (result.isConfirmed) {
                dispatch({
                    type: 'UPDATE_APPLICATION_STATUS',
                    payload: {
                        id: applicant.status_and_identifier[0].id,
                        newStatus: 'rejected'
                    }
                })
                history.push(`/viewApplicantsPage/${params.jobId}`)
            } else if (result.isDenied) {
                Swal.fire('Changes were not saved', '', 'info')
            }
        })
        // then go back to the viewApplicantsPage
    }

    function handleRequestChat() {
        Swal.fire({
            title: 'By requesting to chat you are agreeing to establish a connection between you and the applicant. Do you wish to continue?',
            showDenyButton: true,
            confirmButtonText: 'YES',
            denyButtonText: `NO`,
        }).then((result) => {
            if (result.isConfirmed) {
                Swal.fire('Connection established!', '', 'success')
                dispatch({
                    type: 'UPDATE_APPLICATION_STATUS',
                    payload: {
                        id: applicant.status_and_identifier[0].id,
                        newStatus: 'not_shared'
                    }
                })
            } else if (result.isDenied) {
                Swal.fire('Changes were not saved', '', 'info')
            }
        })
    }

    // console.log(`the applicant info`, applicant);

    return (
        <Box>
            {(Object.keys(applicant).length != 0 && applicant.status_and_identifier[0].status != 'pending') &&
                <Button
                    variant='contained'
                    sx={{ marginLeft: 27 }}
                    onClick={() => { history.push(`/viewApplicantsPage/${params.jobId}`) }}
                >
                    back
                </Button>
            }

            {/* pending */}
            {/* check to see if status is pending and the object of the applicant (candidate) is not empty */}
            {(Object.keys(applicant).length != 0 && applicant.status_and_identifier[0].status === 'pending') &&
                <Box>
                    <Button
                        variant='contained'
                        sx={{ marginLeft: 27, marginRight: 1 }}
                        onClick={() => { history.push(`/viewApplicantsPage/${params.jobId}`) }}
                    >
                        back
                    </Button>
                    <Button
                        sx={{ marginRight: 1 }}
                        variant='contained'
                        onClick={handleRequestChat}
                    >
                        request chat
                    </Button>
                    <Button
                        variant='contained'
                        onClick={handleReject}
                    >
                        reject
                    </Button>
                    <ApplicantNotSharedInfo applicant={applicant} />
                </Box>
            }
            {/* not_shared */}
            {(Object.keys(applicant).length != 0 && applicant.status_and_identifier[0].status === 'not_shared') &&
                <Box>
                    <ApplicantNotSharedInfo applicant={applicant} />
                </Box>
            }
            {/* shared */}
            {(Object.keys(applicant).length != 0 && applicant.status_and_identifier[0].status === 'shared') &&
                <Box>
                    <ApplicantSharedInfo applicant={applicant} />
                    <ApplicantNotSharedInfo applicant={applicant} />
                </Box>
            }
        </Box>
    );
}

export default ApplicantProfile