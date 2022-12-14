import { useHistory, useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import TableCell from '@mui/material/TableCell';
import { useEffect } from 'react'
import EmployerJobDetails from '../EmployerJobDetails/EmployerJobDetails';
import { PanoramaSharp } from '@mui/icons-material';

function EmployerJobItem({ job }) {
    const history = useHistory();
    const dispatch = useDispatch();
    const params = useParams();



    const handleView = () => {
        history.push(`/details/${job.id}`)
    }


    console.log(job.id)
    const handleDeleteItem =()=>{
        dispatch({
            type: 'DELETE_JOB_POST',
            payload: job.id
        })
    }
    
    

    return <>

        <tr>
            <td>{job.title}</td>
            <td>
                <button onClick={handleView}>View</button>
                <button onClick={handleDeleteItem}>Delete</button>
            </td>
        </tr>
    </>
}

export default EmployerJobItem;