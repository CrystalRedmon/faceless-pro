import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Grid from "@mui/material/Grid";
import { Link } from 'react-router-dom';

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
        history.push('/user')
    }

    const handleBack = () => {
        history.push('/user')
    }

    return (
        <Box>

            <Grid container spacing={2}>
                <Grid item xs={3}></Grid>
                <Grid item xs={8}>
                    <Link variant='contained' onClick={handleBack}>Back</Link>
                    <h1>
                        Edit Your Employer Profile
                    </h1>

                    <form>
                        <Grid
                            container
                            rowSpacing={5}
                            justify="flex-end"
                            alignItems="center">
                            <Grid item xs={6}>
                                <TextField
                                    label="Company Name"
                                    value={String(employer.company_name)}
                                    onChange={(evt) => dispatch({
                                        type: 'UPDATE_EDIT_EMPLOYER',
                                        payload: { company_name: evt.target.value }
                                    })}
                                />
                            </Grid>

                            <Grid item xs={6}>

                                <TextField
                                    label="Address"
                                    value={String(employer.company_address)}
                                    onChange={(evt) => dispatch({
                                        type: 'UPDATE_EDIT_EMPLOYER',
                                        payload: { company_address: evt.target.value }
                                    })}
                                />
                            </Grid>

                            <Grid item xs={6}>
                                <TextField
                                    label="Phone Number"
                                    value={String(employer.company_phone)}
                                    onChange={(evt) => dispatch({
                                        type: 'UPDATE_EDIT_EMPLOYER',
                                        payload: { company_phone: evt.target.value }
                                    })}
                                />
                            </Grid>

                            <Grid item xs={6}>
                                <TextField
                                    label="Email"
                                    value={String(employer.email)}
                                    onChange={(evt) => dispatch({
                                        type: 'UPDATE_EDIT_EMPLOYER',
                                        payload: { email: evt.target.value }
                                    })}
                                />
                            </Grid>

                            <Grid item xs={6}>
                                <TextField
                                    label="Company Website"
                                    value={String(employer.company_link)}
                                    onChange={(evt) => dispatch({
                                        type: 'UPDATE_EDIT_EMPLOYER',
                                        payload: { company_link: evt.target.value }
                                    })}
                                />
                            </Grid>

                            <Grid item xs={12}>
                                <TextField
                                    label="Company Description"
                                    sx={{ width: 655 }}
                                    value={String(employer.company_description)}
                                    onChange={(evt) => dispatch({
                                        type: 'UPDATE_EDIT_EMPLOYER',
                                        payload: { company_description: evt.target.value }
                                    })}
                                />
                            </Grid>

                            <Button type='submit' variant="contained" onClick={onSubmit} sx={{ marginTop: 5 }}>save</Button>
                        </Grid>
                    </form>
                </Grid>
                <Grid item xs={3}></Grid>
            </Grid>
        </Box>
    );
}

export default EmployerProfilePage