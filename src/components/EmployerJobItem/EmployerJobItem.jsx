import { useHistory, useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TableCell, Button, Card, Grid, CardContent, Typography } from '@mui/material';
import { useEffect } from 'react'
import EmployerJobDetails from '../EmployerJobDetails/EmployerJobDetails';
import { PanoramaSharp } from '@mui/icons-material';
import Swal from 'sweetalert2';


function EmployerJobItem({ job }) {
    const history = useHistory();
    const dispatch = useDispatch();
    // const params = useParams();


    const handleView = () => {
        history.push(`/details/${job.id}`)
    }


    const handleViewApplicants = () => {
        history.push(`/viewApplicantsPage/${job.id}`);
    }


    function handleDeleteItem() {
        Swal.fire({
            title: 'Are you sure you would like to permanently delete this job post?',
            showDenyButton: true,
            confirmButtonText: 'YES',
            denyButtonText: `NO`,
        }).then((result) => {
            // update status
            if (result.isConfirmed) {
                dispatch({
                    type: "DELETE_JOB_POST",
                    payload: job.id
                })
                Swal.fire('Job Post Deleted')
            } else if (result.isDenied) {
                Swal.fire('Changes were not saved')
            }
        })
    }
    return <>


        <Card variant="outlined" sx={{ width: 275, height: 250, margin: 2}}>
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