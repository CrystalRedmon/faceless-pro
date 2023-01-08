import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import List from '@mui/material/List';

function Education({ education }) {
    // console.log('education', education);
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