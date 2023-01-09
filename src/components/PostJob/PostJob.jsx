import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams, Link } from "react-router-dom";
import EmployerJobList from "../EmployerJobList/EmployerJobList";
import { TextareaAutosize } from "@material-ui/core";
import { InputLabel, Button, Grid, Input, TextField } from "@mui/material"






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

    const handleFormCompletion = () => {


        let button = document.getElementById('populateButton');
        let form = document.getElementById('jobPost');

        button.addEventListener('click', function () {
            // Set the value of the form fields
            form.jobTitle.value = 'Sales Associate';
            form.jobDescription.value = "Do you want to work for a long-standing Alaskan company? Do you want to work with a team that honors excellent customer service? Do you want to work with the support of a leader and team that enjoy a positive work environment?" + '\n' + '\n' + "Founded in Downtown Anchorage in 1947 as a military surplus store, Big Jay's has weathered the trials and tribulations of over 75 years of operating in Alaska. To this day Big Jay's continues to be family owned and operated, and with 5 locations statewide it has expanded to become Alaska's premier all-weather outfitter. From brands like Carhartt, to Columbia, to XtraTuf, to Under Armour, Big Jay's carries all the name brands customers need to be outfitted in Alaska. With an exhaustive inventory, business to business contracts and customized embroidery service, Big Jay's caters to all. Though Big Jay's may have changed with the times, our mission has not: to meet the needs of Alaskans as they confront the challenges of the Last Frontier."
                + '\n' + '\n' +
                "Responsibilities:The Corporate Sales Assistant’s general responsibilities include the following tasks:"
                + '\n' + '\n' +
                "· Assist business - to - business customers with locating proper apparel."
                + '\n' + '\n' +

                "· Create customer orders in order fulfillment software."

                + '\n' + '\n' +

                "· Contact customers via phone or email for pick - up of completed orders."

                + '\n' + '\n' +

                "· Consistently attempt to have all available sizes represented on the sales floor by reporting the voids to the merchandise support specialist, as well as participate in restocking such items as necessary."

                + '\n' + '\n' +

                "· Ensure customer orders are moving through the fulfillment process in a consistent and timely manner."

                + '\n' + '\n' +

                "· Perform End - of - Day procedures in order fulfilment software."

                + '\n' + '\n' +

                "· Adhere to the Customer Service Standards established for the department."

                + '\n' + '\n' +

                "· Adhere to the Merchandise Presentation Standards established for the department."

                + '\n' + '\n' +

                "· Maintain excellent communication with fellow workers and leadership."

                + '\n' + '\n' +

                "· Protect the company’s value and integrity by maintaining confidentiality."

                + '\n' + '\n' +

                "· Commit to and accountable for the delivery of exceptional customer service."

                + '\n' + '\n' +

                "· Lead, encourage and promote positive team member engagement; empower individuality while promoting productivity.";


        });

    }


    return (
        <>
            <Grid container spacing={2}>
                <Grid item xs={3}></Grid>
                <Grid item xs={9}>

                    <Button variant='contained' onClick={handleBack}>Back</Button>
                    <h2 onClick={handleFormCompletion} id='populateButton'>{params.id ? 'Edit Job Post' : 'Post New Position'}</h2>

                    <form action="" id='jobPost'>
                        <InputLabel sx={{ marginTop: 5 }} htmlFor="">Title:</InputLabel>
                        <Input
                            type="text"
                            id='jobTitle'
                            sx={{ borderRadius: '10em', marginBottom: '3em' }}
                            defaultValue={params.id ? job.title : value}
                            onChange={(evt) => dispatch({
                                type: 'UPDATE_EDIT_JOB',
                                payload: { title: evt.target.value }
                            })} />

                        {/* <h2 onClick={handleFormCompletion} id='populateButton'>{params.id ? 'Edit Job Post' : 'Post New Position'}</h2>


                    {/* <form action="" id='jobPost'>
                        <InputLabel sx={{ marginTop: 5 }} htmlFor="">Title:</InputLabel>
                        <Input
                            id='jobTitle'
                            type="text"
                            sx={{ borderRadius: '10em', marginBottom: '3em' }}
                            value={params.id ? job.title : value} */}

                        {/* <h2 onClick={handleFormCompletion} id='populateButton'>{params.id ? 'Edit Job Post' : 'Post New Position'}</h2> */}


                        {/* <form action="" id='jobPost'>
                        <InputLabel sx={{ marginTop: 5 }} htmlFor="">Title:</InputLabel>
                        <Input
                            id='jobTitle'
                            type="text"
                            sx={{ borderRadius: '10em', marginBottom: '3em' }}
                            value={params.id ? job.title : value} */}

                        {/* onChange={(evt) => dispatch({
                                type: 'UPDATE_EDIT_JOB',
                                payload: { title: evt.target.value }
                            })} /> */}

                        <InputLabel htmlFor="">Description:</InputLabel>
                        <TextField type="text"
                            id='jobDescription'
                            size='large'
                            multiline
                            minRows={30}
                            style={{ minRows: '50', width: 750, margin: 'auto', borderRadius: '10px', boxShadow: '0px 4px 10px 0px rgba (0, 0, 0, 0.2)', marginBottom: '3em' }}
                            defaultValue={params.id ? job.description : value}

                            onChange={(evt) => dispatch({
                                type: 'UPDATE_EDIT_JOB',
                                payload: { description: evt.target.value }
                            })} />

                    </form>
                    <Button variant='contained' onClick={onSubmit}>save</Button>
                </Grid>
                <Grid item xs={3}></Grid>
            </Grid>
        </>
    )
}

export default PostJob;
