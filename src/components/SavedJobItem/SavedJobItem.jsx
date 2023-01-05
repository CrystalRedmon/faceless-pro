import { Card, CardContent } from '@mui/material';
import { useDispatch } from "react-redux";
import { useSelector } from 'react-redux';
import { useHistory} from 'react-router-dom';



function SavedJobItem({job}) {
    const dispatch = useDispatch();
    // const savedJobsList = useSelector((store) => store.candidateReducer.saveJobs);
    const appliedJobsList = useSelector(
      (store) => store.candidateReducer.candidateJobs
    );
    const history = useHistory();

  
    function submitApplied() {
      dispatch({
        type: 'FETCH_APPLIED_JOBS',
      });
    }



    return (<>

        <Card variant="outlined" sx={{ width: 275, height: 250, margin: 2, boxShadow: 3 }}>

            <CardContent>
                <div key={job.id}>
                    <h4> {job.title} </h4>

                    <p> {job.company_name}</p>

                    <p> {job.company_address}</p>

                    <div onClick={submitApplied}>
                        {appliedJobsList.find((c) => c.id === job.id) ? (
                            <p>Applied</p>
                        ) : (
                            <button
                                onClick={() => {
                                    dispatch({
                                        type: "APPLY_JOB",
                                        payload: job,
                                    });
                                    history.push("/applied");
                                }}
                            >
                                APPLY{" "}
                            </button>
                        )}
                    </div>

                    <button
                        onClick={() => {
                            history.push(`/CandidateJobDetails/${job.id}`);
                            dispatch({
                                type: "VIEW_JOB_DETAILS",
                                payload: `${params.id}`,
                            });
                        }}
                    >
                        DETAILS
                    </button>

                    <button
                        onClick={() => {
                            dispatch({
                                type: "DELETE_JOB",
                                payload: job,
                            });
                        }}
                    >
                        REMOVE{" "}
                    </button>
                </div>
            </CardContent>

        </Card>




    </>)
}


export default SavedJobItem;