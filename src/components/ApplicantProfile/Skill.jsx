import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import List from '@mui/material/List';

function Skill({ skill }) {
    // console.log('skill', skill);
    return (
        <Box sx={{ margin: "20px" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box>
                    <Typography>{skill.skill_name}</Typography>
                </Box>''
            </Box>
        </Box>
    );
}

export default Skill