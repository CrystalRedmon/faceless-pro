import { useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import Education from './Education';
import Experience from './Experience';
import Skill from './Skill';
import Hyperlink from './Hyperlink';

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
                    <Box sx={{ margin: "20px" }}>
                        <Typography sx={{ display: "flex" }}><b>Education</b></Typography>
                        <List>
                            {applicantNotSharedInfo.education.map(education => <Education key={education.id} education={education} />)}
                        </List>
                        <Typography sx={{ display: "flex" }}><b>Experience</b></Typography>
                        <List>
                            {applicantNotSharedInfo.experience.map(experience => <Experience key={experience.id} experience={experience} />)}
                        </List>
                        <Typography sx={{ display: "flex" }}><b>Skills</b></Typography>
                        <List>
                            {applicantNotSharedInfo.skill.map(skill => <Skill key={skill.id} skill={skill} />)}
                        </List>
                        <Typography sx={{ display: "flex" }}><b>Links</b></Typography>
                        <List>
                            {applicantNotSharedInfo.hyperlink.map(hyperlink => <Hyperlink key={hyperlink.id} hyperlink={hyperlink} />)}
                        </List>
                    </Box>
                </Box>
            }

            {(applicant.status === 'not_shared' && Object.keys(applicantNotSharedInfo).length != 0) &&
                <Box>
                    <Box sx={{ margin: "20px" }}>
                        <Typography sx={{ display: "flex" }}><b>Education</b></Typography>
                        <List>
                            {applicantNotSharedInfo.education.map(education => <Education key={education.id} education={education} />)}
                        </List>
                        <Typography sx={{ display: "flex" }}><b>Experience</b></Typography>
                        <List>
                            {applicantNotSharedInfo.experience.map(experience => <Experience key={experience.id} experience={experience} />)}
                        </List>
                        <Typography sx={{ display: "flex" }}><b>Skills</b></Typography>
                        <List>
                            {applicantNotSharedInfo.skill.map(skill => <Skill key={skill.id} skill={skill} />)}
                        </List>
                        <Typography sx={{ display: "flex" }}><b>Links</b></Typography>
                        <List>
                            {applicantNotSharedInfo.hyperlink.map(hyperlink => <Hyperlink key={hyperlink.id} hyperlink={hyperlink} />)}
                        </List>
                    </Box>
                </Box>
            }

            {(applicant.status === 'shared' && Object.keys(applicantNotSharedInfo).length != 0) &&
                <Box>
                    <h1>TODO: SHARED INFO HERE</h1>
                    <Box sx={{ margin: "20px" }}>
                        <Typography sx={{ display: "flex" }}><b>Education</b></Typography>
                        <List>
                            {applicantNotSharedInfo.education.map(education => <Education key={education.id} education={education} />)}
                        </List>
                        <Typography sx={{ display: "flex" }}><b>Experience</b></Typography>
                        <List>
                            {applicantNotSharedInfo.experience.map(experience => <Experience key={experience.id} experience={experience} />)}
                        </List>
                        <Typography sx={{ display: "flex" }}><b>Skills</b></Typography>
                        <List>
                            {applicantNotSharedInfo.skill.map(skill => <Skill key={skill.id} skill={skill} />)}
                        </List>
                        <Typography sx={{ display: "flex" }}><b>Links</b></Typography>
                        <List>
                            {applicantNotSharedInfo.hyperlink.map(hyperlink => <Hyperlink key={hyperlink.id} hyperlink={hyperlink} />)}
                        </List>
                    </Box>
                </Box>
            }
        </Box>
    );
}

export default ApplicantProfile