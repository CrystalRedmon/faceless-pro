import { Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import List from '@mui/material/List';

function Hyperlink({ hyperlink }) {
    // console.log('hyperlink', hyperlink);
    return (
        <Box sx={{ margin: "5px" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box>
                    <a href={hyperlink.link} target="_blank">{hyperlink.link}</a>
                </Box>
            </Box>
        </Box>
    );
}

export default Hyperlink