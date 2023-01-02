import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

function AppliedToJobsPage() {
const history = useHistory();
const params = useParams();
const dispatch = useDispatch();

const appliedJobsList = useSelector(
(store) => store.candidateReducer.candidateJobs
);
console.log("Jobs applied to:", appliedJobsList);

useEffect(() => {
dispatch({ type: "FETCH_APPLIED_JOBS" });
}, []);

return (
<>
<h1>AppliedToJobsPage - CANDIDATE</h1>
<section>
{appliedJobsList.map((job) => {
return (
<Box key={job.id}>
<Grid container spacing={2} alignItems="center">
<Grid item xs={3}>
<Typography
variant="h5"
onClick={() => {
history.push(`/job/${job.id}`);
dispatch({
type: "VIEW_JOB_DETAILS",
payload: job,
});
}}
>
{job.title}
</Typography>
</Grid>
<Grid item xs={3}>
<Typography>{job.company_name}</Typography>
</Grid>
<Grid item xs={3}>
<img src={job.logo_path} alt={job.company_name} />
</Grid>
<Grid item xs={3}>
<Typography>{job.company_address}</Typography>
</Grid>
<Grid item xs={3}>
{job.status === "pending" ? (
<Typography>
Applied on {new Date(job.time).toLocaleString()}
</Typography>
) : (
<></>
)}
</Grid>
<Grid item xs={3}>
{job.status === "not_shared" ? (
<>
<Typography>
Applied on {new Date(job.time).toLocaleString()}
</Typography>
<Button
variant="contained"
color="primary"
onClick={() => {
dispatch({
type: "SET_JOB_MESSAGE",
payload: job.id,
});
history.push("/message");
console.log("application id:", job.id);
}}
>
Chat
</Button>
</>
) : (
<></>
)
}
</Grid>
</Grid>
</Box>
);
})}

</section>
</>
);
}
export default AppliedToJobsPage;





