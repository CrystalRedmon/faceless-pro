import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { Button, Card, CardContent } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Swal from 'sweetalert2';


function EmployerJobItem({ job }) {
    const history = useHistory();
    const dispatch = useDispatch();

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
                Swal.fire('Job post deleted')
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
                    <Button variant='outlined' sx={{ marginRight: 1 }} onClick={handleView}>View Details</Button>
                    <Button variant='outlined' sx={{ marginRight: 1 }} onClick={handleViewApplicants}>View Applicants</Button>
                    <IconButton color='error' onClick={handleDeleteItem} sx={{ marginTop: 1 }}><DeleteIcon /></IconButton>
                </Box>
            </CardContent>
        </Card>
    </>
}

export default EmployerJobItem;