import { useState } from "react";
import { useDispatch } from 'react-redux';
import { useHistory } from "react-router-dom";
function PostJob() {
    const dispatch = useDispatch();
    const history = useHistory()

    const [employeeId, setEmployeeId] = useState('');
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('')
    const submitPost = () => {
        console.log('Posting job')
        dispatch({
            type: "POST_JOB",
            payload: form
        })
        history.push('/')
    }
    const form = {
        employeeId,
        title,
        description
    }
    const handleId = (evt) => {
        setEmployeeId(evt.target.value);
    }
    const handleTitle = (evt) => {
        setTitle(evt.target.value);
    }
    const handleDescription = (evt) => {
        setDescription(evt.target.value);
    }


    return (
        <>
            <h2>Post New Job</h2>
            <label htmlFor="id">Emp Id</label>
            <input type="text" value={employeeId} onChange={handleId} />
            <label htmlFor="">Title</label>
            <input type="text" value={title} onChange={handleTitle} />
            <label htmlFor="">Description</label>
            <textarea type="text" value={description} onChange={handleDescription} />
            <button onClick={submitPost}>Submit</button>

        </>
    )
}

export default PostJob;