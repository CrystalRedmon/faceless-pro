import { useParams, useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function ViewApplicantsPage() {
    const history = useHistory();
    const params = useParams();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({
            type: 'FETCH_APPLICANTS',
            payload: `${params.id}` // job.id
        })
        console.log(params.id);
    }, [])


    const handleBack = () => {
        history.push('/jobList');
    }

    return (
        <>
            <h1>ViewApplicantsPage</h1>
            <button onClick={handleBack}>Back</button>
        </>
    );
}

export default ViewApplicantsPage