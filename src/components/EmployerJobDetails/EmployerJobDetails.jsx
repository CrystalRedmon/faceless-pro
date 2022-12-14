import { useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';




function EmployerJobDetails() {
    const params = useParams();
    const dispatch = useDispatch();
    const history = useHistory();
    const job = useSelector(store => store.jobs.currentJob);
    console.log('current job details: ', job);

    //FETCH CURRENT JOB WITH PARAMS ID
    useEffect(() => {
        dispatch({
            type: 'FETCH_CURRENT_JOB_POST',
            payload: `${params.id}`
        })
        console.log(params.id)

    }, [])


    const handleClick = () => {
        history.push('/');
    }


    return <>

        <button onClick={handleClick}>Back</button>
        <h2>Title: {job.title}</h2>
        <p>Description:{job.description}</p>

    </>
}


export default EmployerJobDetails;