
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';

function EmployerProfilePage() {

    const employer = useSelector(store => store.editEmployer);
    const history = useHistory();

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch({
            type: 'FETCH_EDIT_EMPLOYER'
        });

    }, []);

    const onSubmit = (evt) => {
        evt.preventDefault();

        dispatch({
            type: 'SAVE_EMPLOYER_DATA',
            payload: employer
        });
        history.push('/')
    }

    const handleClick = () => {

        history.push('/')
    }
    // console.log('THE EMPLOYER INFO', employer);

    return (
        <Box>
            <Button onClick={handleClick}>Back</Button>
            Edit Your Employer Profile

            <form>
                <TextField
                    value={String(employer.company_name)}
                    onChange={(evt) => dispatch({
                        type: 'UPDATE_EDIT_EMPLOYER',
                        payload: { company_name: evt.target.value }
                    })}
                />
                <TextField
                    value={String(employer.company_address)}
                    onChange={(evt) => dispatch({
                        type: 'UPDATE_EDIT_EMPLOYER',
                        payload: { company_address: evt.target.value }
                    })}
                />
                <TextField
                    value={String(employer.company_phone)}
                    onChange={(evt) => dispatch({
                        type: 'UPDATE_EDIT_EMPLOYER',
                        payload: { company_phone: evt.target.value }
                    })}
                />
                <TextField
                    value={String(employer.email)}
                    onChange={(evt) => dispatch({
                        type: 'UPDATE_EDIT_EMPLOYER',
                        payload: { email: evt.target.value }
                    })}
                />
                <TextField
                    value={String(employer.company_link)}
                    onChange={(evt) => dispatch({
                        type: 'UPDATE_EDIT_EMPLOYER',
                        payload: { company_link: evt.target.value }
                    })}
                />
                <TextField
                    value={String(employer.logo_path)}
                    onChange={(evt) => dispatch({
                        type: 'UPDATE_EDIT_EMPLOYER',
                        payload: { logo_path: evt.target.value }
                    })}
                />
                <TextField
                    value={String(employer.company_description)}
                    onChange={(evt) => dispatch({
                        type: 'UPDATE_EDIT_EMPLOYER',
                        payload: { company_description: evt.target.value }
                    })}
                />
                <Button type='submit' variant="contained" onClick={onSubmit}>save</Button>
            </form>
        </Box>
    );
}

export default EmployerProfilePage