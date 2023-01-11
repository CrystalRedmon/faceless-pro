import { useParams, useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Grid, Typography, Button } from "@mui/material";
import ErrorIcon from '@mui/icons-material/Error';

function CandidateJobDetails() {
  const params = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const appliedJobsList = useSelector(
    (store) => store.candidateReducer.appliedJobs
  );
  const job = useSelector((store) => store.candidateReducer.candidateJobs);
  const savedJobsList = useSelector((store) => store.candidateReducer.saveJobs);
  const info = useSelector((store) => store.candidateReducer.candidateInfo);

  // FETCH CURRENT JOB WITH PARAMS ID
  useEffect(() => {
    dispatch({
      type: "VIEW_JOB_DETAILS",
      payload: `${params.id}`,
    });
    dispatch({ type: "FETCH_SAVED_JOBS" });
  }, []);

  function submitSave() {
    dispatch({
      type: "FETCH_SAVED_JOBS",
    });
  }

  const ProfilePage = () => {
    history.push(`/profile`);
  };

  function goBack() {
    window.history.back();
  }

  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={3}></Grid>
        <Grid item xs={4.5}>
          <Button
            variant='contained'
            onClick={goBack}>Back</Button>
        </Grid>
        <Grid container item xs={3.5}>
          {info.id ? (
            <div>
              <Grid sx={{ display: 'inline-block', marginRight: 1 }}>
                <div onClick={submitSave}>
                  {savedJobsList.find((c) => c.id === job[0].id) ? (
                    <Button
                      variant='contained'
                      onClick={() => {
                        dispatch({
                          type: "DELETE_JOB",
                          payload: job[0],
                        });
                        dispatch({ type: "FETCH_SAVED_JOBS" });
                      }}
                    >
                      Unsave
                    </Button>
                  ) : (
                    <Button
                      variant='contained'
                      onClick={() => {
                        dispatch({
                          type: "SAVE_JOBS",
                          payload: job[0],
                        });
                        dispatch({ type: "FETCH_SAVED_JOBS" });
                      }}
                    >
                      Save
                    </Button>
                  )}
                </div>
              </Grid>
              <Grid sx={{ display: 'inline-block' }}>
                <div>
                  {appliedJobsList.find((d) => d.id === job[0].id) ? (
                    <p>Applied</p>
                  ) : (
                    <Button
                      variant='contained'
                      onClick={() => {
                        dispatch({
                          type: "APPLY_JOB",
                          payload: job[0],
                        });
                      }}
                    >
                      Apply
                    </Button>
                  )}
                </div>
              </Grid>
            </div>
          ) : (

            <Button variant='contained' color='error' startIcon={<ErrorIcon />} onClick={ProfilePage}>complete your profile</Button>

          )}
        </Grid>

        <Grid item xs={3}></Grid>

        <Grid container item xs={4} alignItems="flex-start" direction="column">
          <h2>{job[0].title}</h2>
          <Typography variant={"h2"} sx={{ fontSize: "1em" }}>
            {job[0].company_name}
          </Typography>
          <Typography variant={'h2'} sx={{ fontSize: '1em' }}>{job[0].company_address}</Typography>
        </Grid>

        <Grid item xs={5}></Grid>
        <Grid item xs={3}></Grid>
        <Grid item xs={6}>
          <p className="formatText">{job[0].description}</p>
        </Grid>
      </Grid>
    </>
  );
}

export default CandidateJobDetails;
