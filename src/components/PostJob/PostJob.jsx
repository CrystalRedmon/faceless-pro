import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from "react-router-dom";
import EmployerJobList from "../EmployerJobList/EmployerJobList";
import { TextareaAutosize } from "@material-ui/core";
import {InputLabel, Button, Grid} from "@mui/material"






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
            <h2>{params.id ? 'Edit Job Post' : 'Post New Job'}</h2>

            <Button variant='contained' onClick={handleBack}>Back</Button>
            <form action="">
                <InputLabel htmlFor="">Title</InputLabel>
                <input type="text"

                    defaultValue={params.id ? job.title : value}
                    onChange={(evt) => dispatch({
                        type: 'UPDATE_EDIT_JOB',
                        payload: { title: evt.target.value }
                    })} />

                <br />
                <InputLabel htmlFor="">Description</InputLabel>
                <TextareaAutosize type="text"

                    minRows={50}
                    style={{ width: 750, margin: 'auto' }}
                    defaultValue={params.id ? job.description : value}

                    onChange={(evt) => dispatch({
                        type: 'UPDATE_EDIT_JOB',
                        payload: { description: evt.target.value }
                    })} />

                <Button variant='contained' onClick={onSubmit}>Submit</Button>
            </form>
            </Grid>
            <Grid item xs={3}></Grid>
            </Grid>
        </>
    )
}

export default PostJob;
