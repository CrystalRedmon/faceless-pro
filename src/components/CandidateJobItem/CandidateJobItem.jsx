import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'
import UserPage from '../UserPage/UserPage';
import { Card, Grid, CardContent, Typography } from '@mui/material';


function CandidateJobItem({ job }) {
    const history = useHistory();
    const dispatch = useDispatch();
    const savedJobsList = useSelector(store => store.candidateReducer.saveJobs)
    const user = useSelector(store => store.user);
    // const params = useParams();

    useEffect(() => {
        dispatch({ type: 'FETCH_SAVED_JOBS' });
    }, []);

    function submitSave() {
        dispatch({
            type: 'FETCH_SAVED_JOBS',
        });
    }

    const detailsPage = () => {
        history.push(`/CandidateJobDetails/${job.id}`)

    }

    return <>
        <section>
            <Card variant="outlined" sx={{ width: 275, height: 250, margin: 2, boxShadow: 3}}>
                <CardContent>



                    <div key={job.id}>
                        <h4> {job.title} </h4>

                        <p>  {job.company_name}</p>


                        {user.id ?
                            <div>
                                <div onClick={submitSave}>
                                    {savedJobsList.find(c => c.id === job.id) ?
                                        <button
                                            onClick={() => {
                                                dispatch({
                                                    type: 'DELETE_JOB',
                                                    payload: job
                                                });
                                                dispatch({ type: 'FETCH_SAVED_JOBS' });
                                            }}
                                        >Unsave</button> :

                                        <button
                                            onClick={() => {
                                                dispatch({
                                                    type: 'SAVE_JOBS',
                                                    payload: job
                                                });
                                                dispatch({ type: 'FETCH_SAVED_JOBS' });
                                            }}
                                        >Save </button>



                                    }
                                </div>

                                <button onClick={detailsPage}>Details </button>
                            </div>

                            : <> </>


                        }

                    </div>
                </CardContent>
            </Card>


        </section>
    </>
}

export default CandidateJobItem;

