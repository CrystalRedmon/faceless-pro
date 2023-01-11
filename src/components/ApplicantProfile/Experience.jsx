import { Typography } from '@mui/material';
import Box from '@mui/material/Box';


function Experience({ experience }) {
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