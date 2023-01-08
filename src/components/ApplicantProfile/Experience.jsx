import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import List from '@mui/material/List';

function Experience({ experience }) {
    // console.log('experience', experience);
    return (
        <Box sx={{ margin: "20px" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box>
                    <Typography>Company: {experience.employer}</Typography>
                </Box>
                <Box>
                    <Typography>Dates: {experience.dates}</Typography>
                </Box>
            </Box>
            <Box>
                <Box sx={{ display: "flex" }}>
                    <Typography>Title: {experience.title}</Typography>
                </Box>
                <Box sx={{ display: "flex" }}>
                    <Typography>Job Duties:</Typography>
                </Box>
                <Box sx={{ display: "flex" }}>
                    <Typography>{experience.job_duties}</Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default Experience