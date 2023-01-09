import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'
import UserPage from '../UserPage/UserPage';
import { Card, Grid, CardContent, Typography, Button } from '@mui/material';
import './CandidateJobItem.css';


function CandidateJobItem({ job }) {
    const history = useHistory();
    const dispatch = useDispatch();
    const savedJobsList = useSelector(store => store.candidateReducer.saveJobs)
    const info = useSelector(store => store.candidateReducer.candidateInfo);
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

    const ProfilePage = () => {
        history.push(`/profile`)

    }

    return <>
        <section>
            <Card variant='contained' sx={{ width: 275, height: 250, margin: 2, boxShadow: 3 }}>
                <CardContent>



                    <div key={job.id}>
                        <h4> {job.title} </h4>

                        <p>  {job.company_name}</p>


                        {info.id ?
                            <div>
                                <div onClick={submitSave}>
                                    {savedJobsList.find(c => c.id === job.id) ?
                                        <Button
                                        sx={{marginBottom: '1em'}}
                                            variant='contained'
                                            onClick={() => {
                                                dispatch({
                                                    type: 'DELETE_JOB',
                                                    payload: job
                                                });
                                            }}
                                        >Unsave</Button> :

                                        <Button sx={{marginBottom: '1em'}}
                                            variant='contained'
                                            onClick={() => {
                                                dispatch({
                                                    type: 'SAVE_JOBS',
                                                    payload: job
                                                });
                                            }}
                                        >Save </Button>



                                    }
                                </div>

                                <Button variant='contained' onClick={detailsPage}>View Job Details </Button>
                            </div>

                            : <>


                                <Button variant='contained' onClick={ProfilePage}>Complete Your Profile to Save and Apply</Button>
                                <br></br><br></br>
                                <Button variant='contained' onClick={detailsPage}>View Job Details </Button>
                            </>



                        }

                    </div>
                </CardContent>
            </Card>


        </section>
    </>
}

export default CandidateJobItem;

