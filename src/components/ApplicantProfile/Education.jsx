import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

function Education({ education }) {
    return (
        <Box sx={{margin: "20px"}}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box>
                    <Typography>School: {education.school}</Typography>
                </Box>
                <Box>
                    <Typography>Dates: {education.dates}</Typography>
                </Box>
            </Box>
            <Box>
                <Box sx={{ display: "flex" }}>
                    <Typography>Qualifications: {education.qualification}</Typography>
                </Box>
                <Box sx={{ display: "flex" }}>
                    <Typography>Notes:</Typography>
                </Box>
                <Box sx={{ display: "flex" }}>
                    <Typography>{education.note}</Typography>
                </Box>
            </Box>
        </Box>
    );
}

export default Education