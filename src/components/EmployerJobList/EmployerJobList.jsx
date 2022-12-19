import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import UserTypeChoice from '../UserTypeChoice/UserTypeChoice';
import { useDispatch } from 'react-redux';
import EmployerJobItem from '../EmployerJobItem/EmployerJobItem';
import { useHistory } from 'react-router-dom';


function EmployerJobList() {

    const dispatch = useDispatch();
    const jobs = useSelector((store) => store.jobs.allJobs);
    const history = useHistory();

    useEffect(() => {
        dispatch({ type: 'FETCH_JOBS' });
    }, []);

    console.log('all of the jobs', jobs);

    const handleAddJob = () => {
        history.push('/jobForm')
    }
    return <>
        <h1>Open Job Posts</h1>
        <button onClick={handleAddJob}>Add New Job</button>
        <table>
            <thead>
                <tr>
                    <th scope="col">TITLE</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {jobs.map(job =>
                    <EmployerJobItem key={job.id} job={job} />
                )}
            </tbody>
        </table>
    </>
}

export default EmployerJobList;