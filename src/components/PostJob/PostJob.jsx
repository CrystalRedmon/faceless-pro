import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from "react-router-dom";



function PostJob() {
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();
    const job = useSelector(store => store.jobs.editJob);
    console.log('edit this job: ', job)


// gets the job info if there is a /:id in url.
// this allows the component to be used as a form to add and edit job post
    useEffect(() => {
        if (params.id) {
            dispatch({
                type: 'FETCH_EDIT_JOB',
                payload: params.id
            });

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
        history.push('/')
    }

    // needed in make sure fields are empty before add
    const value = ' ';

    return (
        <>
            <h2>{params.id ? 'Edit Job Post' : 'Post New Job'}</h2>
            <form action="">
                <label htmlFor="">Title</label>
                <input type="text"

                    value={params.id ? job.title : value}
                    onChange={(evt) => dispatch({
                        type: 'UPDATE_EDIT_JOB',
                        payload: { property: 'title', value: evt.target.value }
                    })} />

        

                <label htmlFor="">Description</label>
                <textarea type="text" 
                    value={params.id ? job.description : value}

                    onChange={(evt) => dispatch({
                        type: 'UPDATE_EDIT_JOB',
                        payload: { property: 'description', value: evt.target.value }
                    })} />

                <button onClick={onSubmit}>Submit</button>
            </form>
        </>
    )
}

export default PostJob;