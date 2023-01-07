import { useHistory, useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TableCell, Button, Card, Grid, CardContent, Typography } from '@mui/material';
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


        <Card variant="outlined" sx={{ width: 275, height: 250, margin: 2, boxShadow: 3 }}>
            <CardContent>
                <h2>{job.title}</h2>
                <Typography><Link variant='contained' onClick={handleView}>View Details</Link></Typography>
                <Typography><Link variant='contained' onClick={handleViewApplicants}>View Applicants</Link></Typography>
                <Button variant='contained' onClick={handleDeleteItem} sx={{marginTop:1}}>Delete</Button>
            </CardContent>

        </Card>
        {/* <tr>
            <td>{job.title}</td>
            <td>
                <Button variant='contained' onClick={handleView}>Details</Button>
            </td>
            <td>
                <Button variant='contained' onClick={handleViewApplicants}>View Applicants</Button>
            </td>
            <td>
                <Button variant='contained' onClick={handleDeleteItem}>Delete</Button>
            </td>
        </tr> */}
    </>
}

export default EmployerJobItem;