import {useSelector} from "react-redux";
import { useHistory} from "react-router-dom"
import './EmployerHomepage.css'

function EmployerHomepage(){

    const employer = useSelector(store=> store.user.user_info);
    const history = useHistory();

    console.log('this is the employer: ', employer);

    const handleToProile = () => {
        history.push('/user/editprofile')
    }


    return<>
    
    <h1>Employer Homepage</h1>
    <h2>Welcome {employer.company_name}</h2>
    <ul className='employerinfo'>
        <li>{employer.company_address}</li>
        <li>{employer.company_phone}</li>
        <li>{employer.email}</li>
        <li>{employer.company_address}</li>
    </ul>


    <button onClick={handleToProile}>View/Edit Full Profile</button>
    
    
    
    
    
    </>}


export default EmployerHomepage;