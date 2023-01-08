import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import List from '@mui/material/List';

function Skill({ skill }) {
    // console.log('skill', skill);
    return (
        <Box sx={{ margin: "5px" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box>
                    <li>{skill.skill_name}</li>
                </Box>
            </Box>
        </Box>
    );
}

export default Skill