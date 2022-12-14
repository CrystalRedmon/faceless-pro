import { useParams, useHistory } from 'react-router-dom';
import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';




function EmployerJobDetails(){
    const params = useParams();
    const dispatch = useDispatch();
    const job = useSelector(store=>store.currentJob);


    //FETCH CURRENT JOB WITH PARAMS ID
    useEffect(()=>{
        dispatch({
            type: 'FETCH_CURRENT_JOB_POST',
        })


    })

    return<>
    
    <h1>Here we Go</h1>
    
    
</>}


export default EmployerJobDetails;