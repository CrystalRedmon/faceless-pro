import { useHistory, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import TableCell from '@mui/material/TableCell';
import { useEffect } from 'react'
import EmployerJobDetails from '../EmployerJobDetails/EmployerJobDetails';

function EmployerJobItem({ job }) {
    const history = useHistory();
    const dispatch = useDispatch();




    const handleClick = () => {
        history.push(`/details/${job.id}`)
    }

    return <>


        <td>{job.title}</td>
        <td>
            <button onClick={handleClick}>View</button>
            {/* <button onClick={handleDeleteItem}>Delete</button>  DELETE SAGA NEEDED */}
        </td>
    </>
}

export default EmployerJobItem;