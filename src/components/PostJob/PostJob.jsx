import { useState, useEffect } from "react";
import { useDispatch } from 'react-redux';
import { useHistory, useParams } from "react-router-dom";



function PostJob() {
    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();

    const [employeeId, setEmployeeId] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (params.id) {
            dispatch({
                type: 'FETCH_EDIT_JOB',
                payload: params.id
            });
        }
    }, [params.id])



    // const submitPost = () => {
    //     console.log('Posting job')
    //     dispatch({
    //         type: "POST_JOB",
    //         payload: form
    //     })
    //     history.push('/')
    // }



    const onSubmit = (evt) => {
        evt.preventDefault();

        console.log('Posting job');

        dispatch({
            type: "SAVE_JOB",
            payload: form
        })
        
        history.push('/')
    }


    const form = {
        employeeId,
        title,
        description
    }


    const handleTitle = (evt) => {
        setTitle(evt.target.value);
    }


    const handleDescription = (evt) => {
        setDescription(evt.target.value);
    }


    return (
        <>
            <h2>{params.id ? 'Edit Job Post' : 'Post New Job'}</h2>
            <form action="">
                <label htmlFor="">Title</label>
                <input type="text" value={title} onChange={handleTitle} />
                <label htmlFor="">Description</label>
                <textarea type="text" value={description} onChange={handleDescription} />
                <button onClick={onSubmit}>Submit</button>
            </form>
        </>
    )
}

export default PostJob;