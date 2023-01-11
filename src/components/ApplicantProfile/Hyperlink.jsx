import Box from '@mui/material/Box';


function Hyperlink({ hyperlink }) {
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