import { useParams, useHistory } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { join } from "redux-saga/effects";

function CandidateJobDetails() {
  const params = useParams();
  const dispatch = useDispatch();
  const history = useHistory();
  const appliedJobsList = useSelector((store) => store.candidateReducer.appliedJobs);
  const job = useSelector((store) => store.candidateReducer.candidateJobs);
  const savedJobsList = useSelector(store => store.candidateReducer.saveJobs)
   console.log(' applied jobs ', job[0].id);


  //FETCH CURRENT JOB WITH PARAMS ID
  useEffect(() => {
    dispatch({
      type: "VIEW_JOB_DETAILS",
      payload: `${params.id}`,
    });
    dispatch({ type: 'FETCH_SAVED_JOBS' });
    // console.log(params.id)
  }, []);


  function submitSave() {
    dispatch({
      type: 'FETCH_SAVED_JOBS',
    });
  }

  console.log("params.id is...", params.id);

  function goBack() {
    window.history.back()
  }

  return (
    <>
      <h1>Candidate Job Details</h1>
      <button onClick={goBack}>Back</button>
      <br></br>
      <h2>Company Logo:{job[0].logo_path}</h2>
      <br></br>
      <h2>Company Name:{job[0].company_name}</h2>
      <br></br>
      <h2>Company Address:{job[0].company_address}</h2>
      <br></br>
      <br></br>

      <h2>Job Title:{job[0].title}</h2>
      <br></br>
      <p className='formatText'> Job Description:{job[0].description}</p>

      <div onClick={submitSave}>
        {savedJobsList.find(c => c.id === job[0].id) ?
          <button
            onClick={() => {
              dispatch({
                type: 'DELETE_JOB',
                payload: job[0],
              });
              dispatch({ type: 'FETCH_SAVED_JOBS' });
            }}
          >Unsave</button> :

          <button
            onClick={() => {
              dispatch({
                type: 'SAVE_JOBS',
                payload: job[0],
              });
              dispatch({ type: 'FETCH_SAVED_JOBS' });
            }}
          >Save </button>

        }
      </div>
     
      {appliedJobsList.find(d => d.id === job[0].id) ? 
      <p>Applied</p>:
         <button
      onClick={()=>{
        dispatch({
          type: 'APPLY_JOB',
          payload: job[0]
        })
        history.push('/applied')
      }}>Apply</button> 
    }
    </>
  );
}

export default CandidateJobDetails;
