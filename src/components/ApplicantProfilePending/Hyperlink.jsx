import Box from '@mui/material/Box';

function Hyperlink({ hyperlink }) {
    return (
        <Box sx={{ margin: "20px" }}>
            <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                <Box>
                    {/* <Typography>{hyperlink.link}</Typography> */}
                    <a href={hyperlink.link}>{hyperlink.link}</a>
                </Box>
            </Box>
        </Box>
    );
}

export default Hyperlink;