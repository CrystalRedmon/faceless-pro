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
import Swal from 'sweetalert2';


function ApplicantProfile() {

    // const applicantNotSharedInfo = useSelector(store => store.jobs.applicantNotSharedInfo);
    // const applicantSharedInfo = useSelector(store => store.jobs.applicantSharedInfo);
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
            <Button
                variant='contained'
                onClick={() => { history.push(`/viewApplicantsPage/${params.jobId}`) }}
            >
                back
            </Button>

            {/* pending */}
            {/* check to see if status is pending and the object of the applicant (candidate) is not empty */}
            {(Object.keys(applicant).length != 0 && applicant.status_and_identifier[0].status === 'pending') &&
                <Box>
                    <Button
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
                    {/* <Box>
                        <Typography sx={{ display: "flex" }}><b>Name:</b>{applicant.status_and_identifier[0].random_identifier}</Typography>
                        <List>
                            <Typography sx={{ display: "flex" }}><b>Education</b></Typography>
                            {applicant.education.map(education => <Education key={education.id} education={education} />)}
                        </List>
                        <Typography sx={{ display: "flex" }}><b>Experience</b></Typography>
                        <List>
                            {applicant.experience.map(experience => <Experience key={experience.id} experience={experience} />)}
                        </List>
                        <Typography sx={{ display: "flex" }}><b>Skills</b></Typography>
                        {applicant.skill != null ?
                            <>
                                <List>
                                    {applicant.skill.map(skill => <Skill key={skill.id} skill={skill} />)}
                                </List></>
                            : <>applicant did not fill out</>
                        }
                        <Typography sx={{ display: "flex" }}><b>Links</b></Typography>
                        {applicant.hyperlink != null ?
                            <>
                                <List>
                                    {applicant.hyperlink.map(hyperlink => <Hyperlink key={hyperlink.id} hyperlink={hyperlink} />)}
                                </List>
                            </>
                            : <>applicant did not fill out</>
                        }
                    </Box> */}
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
                    {/* <Box sx={{ margin: "20px" }}>
                        <Typography sx={{ display: "flex" }}><b>Name:</b>{applicant.profile[0].first_name} {applicant.profile[0].last_name}</Typography>
                        <Typography sx={{ display: "flex" }}><b>Email:</b>{applicant.profile[0].email}</Typography>
                        <Typography sx={{ display: "flex" }}><b>LinkedIn:</b><a href={applicant.profile[0].linkedin_link} target="_blank">{applicant.profile[0].linkedin_link}</a></Typography>
                        <Typography sx={{ display: "flex" }}><b>Resume:</b>{applicant.profile[0].resume_path}</Typography>
                        <Typography sx={{ display: "flex" }}><b>Cover Letter:</b>{applicant.profile[0].cover_letter_path}</Typography>
                    </Box> */}
                    <ApplicantSharedInfo applicant={applicant} />
                    <ApplicantNotSharedInfo applicant={applicant} />
                </Box>
            }
        </Box>
    );
}

export default ApplicantProfile