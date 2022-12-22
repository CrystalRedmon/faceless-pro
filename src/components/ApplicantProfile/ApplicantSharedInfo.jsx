import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import List from '@mui/material/List';

function ApplicantSharedInfo({ applicantSharedInfo }) {

    console.log(applicantSharedInfo);
    return (
        <Box sx={{ margin: "20px" }}>
            <Typography sx={{ display: "flex" }}><b>Name:</b>{applicantSharedInfo.first_name} {applicantSharedInfo.last_name}</Typography>
            <Typography sx={{ display: "flex" }}><b>Email:</b>{applicantSharedInfo.email}</Typography>
            <Typography sx={{ display: "flex" }}><b>LinkedIn:</b><a href={applicantSharedInfo.linkedin_link} target="_blank">{applicantSharedInfo.linkedin_link}</a></Typography>
            <Typography sx={{ display: "flex" }}><b>Resume:</b>{applicantSharedInfo.resume_path}</Typography>
            <Typography sx={{ display: "flex" }}><b>Cover Letter:</b>{applicantSharedInfo.cover_letter_path}</Typography>
        </Box>
    );
}

export default ApplicantSharedInfo