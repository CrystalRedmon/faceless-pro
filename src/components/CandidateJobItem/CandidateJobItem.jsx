import { useHistory, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react'


function CandidateJobItem({ job }) {
    const history = useHistory();
    const dispatch = useDispatch();
    // const params = useParams();


    const detailsPage = () => {
        history.push(`/CandidateJobDetails/${job.id}`)
    }

    return <>
    <section>

<div key = {job.id}>
                  <h4> {job.title} </h4>
                  
                  <p>  {job.company_name}</p> 
                  
                  <p> {job.company_address}</p>
                    <button 
                  onClick={() =>{
                      dispatch({
                        type: 'SAVE_JOBS',
                        payload: job
                    })
                    }}
                >Save </button> <button onClick = {detailsPage}>Details </button>
         </div> 
    
          </section>
    </>
}

export default CandidateJobItem;