import Box from '@mui/material/Box';


function Skill({ skill }) {
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