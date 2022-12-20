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
            <Button variant='contained'>request chat</Button>
            <Button variant='contained'>reject</Button>
            <Box>
                {applicant.length != 0 &&
                    <Box sx={{ margin: "20px" }}>
                        <Typography sx={{ display: "flex" }}><b>Education</b></Typography>
                        <List>
                            {applicant[0].education.map(education => <Education key={education.id} education={education} />)}
                        </List>
                        <Typography sx={{ display: "flex" }}><b>Experience</b></Typography>
                        <List>
                            {applicant[0].experience.map(experience => <Experience key={experience.id} experience={experience} />)}
                        </List>
                        <Typography sx={{ display: "flex" }}><b>Skills</b></Typography>
                        <List>
                            {applicant[0].skill.map(skill => <Skill key={skill.id} skill={skill} />)}
                        </List>
                        <Typography sx={{ display: "flex" }}><b>Hyperlink</b></Typography>
                        <List>
                            {applicant[0].hyperlink.map(hyperlink => <Hyperlink key={hyperlink.id} hyperlink={hyperlink} />)}
                        </List>
                    </Box>
                }
            </Box>
        </Box>
    );
}

export default ApplicantNotShared