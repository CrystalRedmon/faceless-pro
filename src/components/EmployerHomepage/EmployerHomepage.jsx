import {useSelector} from "react-redux";
import { useHistory} from "react-router-dom"
import './EmployerHomepage.css'

function EmployerHomepage(){

    const employer = useSelector(store=> store.user);
    const history = useHistory();
    

    console.log('this is the employer: ', employer);

    const handleToProile = () => {
        history.push('/user/editprofile')
    }


    return<>
    
    <h1>Employer Homepage</h1>
    <h2>Welcome {employer.username}</h2>
    <div><img src={employer.logo_path} alt="" width={'200px'}/></div>
    <ul className='employerinfo'>
        <li>{employer.user_info.company_address}</li>
        <li>{employer.user_info.company_phone}</li>
        <li>{employer.user_info.email}</li>
        <li>{employer.user_info.company_link}</li>
    </ul>


    <button onClick={handleToProile}>View/Edit Full Profile</button>
    
    
    
    
    
    </>}


export default EmployerHomepage;