import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import UserTypeChoice from '../UserTypeChoice/UserTypeChoice';
import { useDispatch } from 'react-redux';
import EmployerJobItem from '../EmployerJobItem/EmployerJobItem';

function EmployerJobList() {

    const dispatch = useDispatch();
    const jobs = useSelector((store) => store.jobs.allJobs);

    useEffect(() => {
        dispatch({ type: 'FETCH_JOBS' });
    }, []);

    console.log('all of the jobs', jobs);
    return <>
        <h1>Open Job Posts</h1>
        {/* <List>
                    {invites.map(invite =>
                        <InviteItem key={invite.id} invite={invite} />
                    )}
            </List> */}
        <table>
            <thead>
                <tr>
                    <th scope="col">TITLE</th>
                    <th scope="col"></th>
                </tr>
            </thead>
            <tbody>
                {jobs.map(job =>
                    <EmployerJobItem key={job.id.toString()} job={job} />
                )}
            </tbody>
        </table>
    </>
}

export default EmployerJobList;