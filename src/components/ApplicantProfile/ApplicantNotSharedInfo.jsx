import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import List from '@mui/material/List';

import Education from './Education';
import Experience from './Experience';
import Skill from './Skill';
import Hyperlink from './Hyperlink';

function ApplicantNotSharedInfo({ applicantNotSharedInfo, applicant }) {
    console.log(applicant);
    return (
        <Box sx={{ margin: "20px" }}>
            {applicant.status != 'shared' && <Typography sx={{ display: "flex" }}><b>Name:</b>{applicant.random_identifier}</Typography>}

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
    );
}

export default ApplicantNotSharedInfo