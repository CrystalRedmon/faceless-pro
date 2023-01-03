import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

function ApplicantSharedInfo({ applicant }) {

    return (
        <Box sx={{ margin: "20px" }}>
            <Typography sx={{ display: "flex" }}><b>Name:</b>{applicant.profile[0].first_name} {applicant.profile[0].last_name}</Typography>
            <Typography sx={{ display: "flex" }}><b>Email:</b>{applicant.profile[0].email}</Typography>
            <Typography sx={{ display: "flex" }}><b>LinkedIn:</b><a href={applicant.profile[0].linkedin_link} target="_blank">{applicant.profile[0].linkedin_link}</a></Typography>
            <Typography sx={{ display: "flex" }}><b>Resume:</b>{applicant.profile[0].resume_path}</Typography>
            <Typography sx={{ display: "flex" }}><b>Cover Letter:</b>{applicant.profile[0].cover_letter_path}</Typography>
        </Box>
    );
}

export default ApplicantSharedInfo