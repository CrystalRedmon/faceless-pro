import { useHistory, useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {TableCell, Button} from '@mui/material';
import { useEffect } from 'react'
import EmployerJobDetails from '../EmployerJobDetails/EmployerJobDetails';
import { PanoramaSharp } from '@mui/icons-material';


function EmployerJobItem({ job }) {
    const history = useHistory();
    const dispatch = useDispatch();
    // const params = useParams();


    const handleView = () => {
        history.push(`/details/${job.id}`)
    }


    // console.log(job.id);
    const handleDeleteItem = () => {
        dispatch({
            type: 'DELETE_JOB_POST',
            payload: job.id
        })
    }

    const handleViewApplicants = () => {
        history.push(`/viewApplicantsPage/${job.id}`);
    }

    return <>

        <tr>
            <td>{job.title}</td>
            <td>
                <Button variant='contained' onClick={handleView}>Details</Button>
                <Button variant='contained' onClick={handleViewApplicants}>View Applicants</Button>
                <Button variant='contained' onClick={handleDeleteItem}>Delete</Button>
            </td>
        </tr>
    </>
}

export default EmployerJobItem;