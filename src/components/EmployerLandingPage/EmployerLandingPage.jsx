import EmployerJobList from "../EmployerJobList/EmployerJobList";
import EmployerForm from "../EmployerForm/EmployerForm";
import EmployerProfilePage from "../EmployerProfilePage/EmployerProfilePage";
import { useSelector } from 'react-redux';


function EmployerLandingPage() {
    const user = useSelector((store) => store.user);

    return (
        <>
            {user.user_info != null ? <EmployerProfilePage/> : <EmployerForm /> }
        </>
    );
}

export default EmployerLandingPage