import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import List from '@mui/material/List';

import Education from './Education';
import Experience from './Experience';
import Skill from './Skill';
import Hyperlink from './Hyperlink';

function ApplicantNotSharedInfo({ applicant }) {
    return (
        <Box sx={{ margin: "20px" }}>
            <Box>
                {applicant.status_and_identifier[0].status != 'shared' &&
                    <Typography sx={{ display: "flex" }}><b>Name:</b>{applicant.status_and_identifier[0].random_identifier}</Typography>
                }
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
            </Box>
        </Box>
    );
}

export default ApplicantNotSharedInfo