import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'
import UserPage from '../UserPage/UserPage';


function CandidateJobItem({ job }) {
    const history = useHistory();
    const dispatch = useDispatch();
    const savedJobsList = useSelector(store => store.candidateReducer.saveJobs)
    const user = useSelector(store => store.user);
    // const params = useParams();

    useEffect(() => {
        dispatch({ type: 'FETCH_SAVED_JOBS' });
    }, []);

    function submitSave(){
        dispatch({
            type: 'FETCH_SAVED_JOBS',
        });
    }

    const detailsPage = () => {
        history.push(`/CandidateJobDetails/${job.id}`)

    }

    return <>
    <section>

<div key = {job.id}>
                  <h4> {job.title} </h4>
                  
                  <p>  {job.company_name}</p> 
                  
                  <p> {job.company_address}</p>
            
{user.id ?  
<div>
        <div onClick = {submitSave}>
                  {savedJobsList.find(c => c.id === job.id) ?
                  <button
                  onClick={() =>{
                    dispatch({
                      type: 'DELETE_JOB',
                      payload: job
                  })
                  }}
                  >Unsave</button> : 
                  
                  <button 
                  onClick={() =>{
                      dispatch({
                        type: 'SAVE_JOBS',
                        payload: job
                    })
                    }}
                >Save </button>
                
                

}
</div>
                
                <button onClick = {detailsPage}>Details </button>
         </div> 

: <> </>

         
}

</div>

    
          </section>
    </>
}

export default CandidateJobItem;

