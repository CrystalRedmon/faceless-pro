import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'
import { Card, CardContent, Typography, Button } from '@mui/material';
import Box from '@mui/material/Box';

import './CandidateJobItem.css';


function CandidateJobItem({ job }) {
    const history = useHistory();
    const dispatch = useDispatch();
    const savedJobsList = useSelector(store => store.candidateReducer.saveJobs)
    const info = useSelector(store => store.candidateReducer.candidateInfo);

    //  useEffect(() => {
    //      dispatch({ type: 'FETCH_SAVED_JOBS' });
    //  }, []);

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
            <Card variant='contained' sx={{ width: '375px', margin: 2, boxShadow: 3 }}>
                <CardContent>
                    <div>

                        <Typography sx={{ marginBottom: 1 }}><b>{job.title}</b></Typography>

                        <Typography sx={{ marginBottom: 1 }}>{job.company_name}</Typography>

                        {info.id ?
                            <Box sx={{ display: 'flex' }}>
                                <Box onClick={submitSave}>
                                    {savedJobsList.find(c => c.id === job.id) ?
                                        <Button
                                            sx={{ marginRight: 1 }}
                                            variant='contained'
                                            onClick={() => {
                                                dispatch({
                                                    type: 'DELETE_JOB',
                                                    payload: job
                                                });
                                            }}
                                        >
                                            unsave
                                        </Button>

                                        :

                                        <Button
                                            sx={{ marginRight: 1 }}
                                            variant='contained'
                                            onClick={() => {
                                                dispatch({
                                                    type: 'SAVE_JOBS',
                                                    payload: job
                                                });
                                            }}
                                        >
                                            save
                                        </Button>
                                    }
                                </Box>
                                <Button variant='outlined' onClick={detailsPage}>View Job Details</Button>
                            </Box>

                            :

                            <Box>
                                <Button variant='outlined' onClick={detailsPage}>View Job Details</Button>
                            </Box>
                        }
                    </div>
                </CardContent>
            </Card>
        </section>
    </>
}

export default CandidateJobItem;

