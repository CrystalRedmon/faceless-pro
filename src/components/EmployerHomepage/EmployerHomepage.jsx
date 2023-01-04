import { useSelector } from "react-redux";
import { useHistory, Link } from "react-router-dom"
import './EmployerHomepage.css'
import { InputLabel, Button, Grid } from "@mui/material"

function EmployerHomepage() {

    const employer = useSelector(store => store.user);
    const history = useHistory();


    console.log('this is the employer: ', employer);

    const handleToProile = () => {
        history.push('/user/editprofile')
    }


    return <>

        <Grid container spacing={2}>
            <Grid item xs={3}></Grid>
            <Grid item xs={6}>
                <h1 mb={20}>Welcome, {employer.username}</h1>
                <div>{employer.user_info.logo_path}</div>
                <ul className='employerinfo'>
                    <li>{employer.user_info.company_address}</li>
                    <li>{employer.user_info.company_phone}</li>
                    <li>{employer.user_info.email}</li>
                    <li>{employer.user_info.company_link}</li>
                </ul>
                <Link variant='contained' onClick={handleToProile}>View/Edit Full Profile</Link>
            </Grid>
            <Grid item xs={3}> </Grid>

        </Grid>

    </>
}


export default EmployerHomepage;