import { useHistory, useParams, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { TableCell, Button, Card, Grid, CardContent, Typography } from '@mui/material';
import { useEffect } from 'react'
import EmployerJobDetails from '../EmployerJobDetails/EmployerJobDetails';
import { PanoramaSharp } from '@mui/icons-material';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
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


        <Card variant="outlined" sx={{ margin: 2, boxShadow: 3 }}>
            <CardContent>
                <h2>{job.title}</h2>
                <Box sx={{ display: 'flex' }}>
                    <Button variant='contained' sx={{ marginRight: 1 }} onClick={handleView}>View Details</Button>
                    <Button variant='contained' sx={{ marginRight: 1 }} onClick={handleViewApplicants}>View Applicants</Button>
                    <IconButton color='error' onClick={handleDeleteItem} sx={{ marginTop: 1 }}><DeleteIcon /></IconButton>
                </Box>
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