import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams, Link } from "react-router-dom";
import EmployerJobList from "../EmployerJobList/EmployerJobList";
import { TextareaAutosize } from "@material-ui/core";
import { InputLabel, Button, Grid, Input, TextField} from "@mui/material"






function PostJob() {
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();
    const job = useSelector(store => store.jobs.editJob);

    console.log('edit this job: ', job)


    // gets the job info if there is a /:id in url.
    // this allows the component to be used as a form to add and edit job post

    useEffect(() => {
        console.log('paramssss', params.id)
        if (params.id) {
            dispatch({
                type: 'FETCH_EDIT_JOB',
                payload: params.id
            });
        } else {
            dispatch({
                type: 'CLEAR_ADD_FIELDS'
            })
        }
    }, [params.id])




    // onSubmit will send info info to save_job saga whether it is add or edit
    // post vs put will be determined in saga
    const onSubmit = (evt) => {
        evt.preventDefault();
        dispatch({
            type: "SAVE_JOB",
            payload: job
        })
        history.push('/jobList')
    }

    // needed in make sure fields are empty before add
    let value;


    //handles back button.
    const handleBack = () => {
        //if employer is editing back will take them to details view
        if (params.id) {
            history.push(`/details/${job.id}`);
            dispatch({
                type: 'CLEAR_ADD_FIELDS' // empties input fields to avoid unwanted edit from populating fields
            });
            // if employer is adding back will take them to job list view
        } else {

            history.push(`/jobList`);

        }

    }



    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={3}></Grid>
                <Grid item xs={9}>
                    <Link variant='contained' onClick={handleBack}>Back</Link>
                    <h2>{params.id ? 'Edit Job Post' : 'Post New Job'}</h2>


                    <form action="">
                        <InputLabel sx={{ marginTop: 5}} htmlFor="">Title:</InputLabel>
                        <Input type="text"
                            sx={{borderRadius: '10em', marginBottom: '3em'}}
                            defaultValue={params.id ? job.title : value}
                            onChange={(evt) => dispatch({
                                type: 'UPDATE_EDIT_JOB',
                                payload: { title: evt.target.value }
                            })} />

                        <br />
                        <InputLabel htmlFor="">Description:</InputLabel>
                        <TextField type="text"
                            size='large'
                            multiline
                            minRows={30}
                            style={{ minRows: '50', width: 750, margin: 'auto', borderRadius:'10px', boxShadow: '0px 4px 10px 0px rgba (0, 0, 0, 0.2)', marginBottom: '3em' }}
                            defaultValue={params.id ? job.description : value}

                            onChange={(evt) => dispatch({
                                type: 'UPDATE_EDIT_JOB',
                                payload: { description: evt.target.value }
                            })} />


                    </form>
                    <Button variant='contained' onClick={onSubmit}>Submit</Button>
                </Grid>
                <Grid item xs={3}></Grid>
            </Grid>
        </>
    )
}

export default PostJob;
