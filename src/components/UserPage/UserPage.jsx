import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import UserTypeChoice from '../UserTypeChoice/UserTypeChoice';
import { useDispatch } from 'react-redux';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_JOBS' });
  }, []);

  const user = useSelector((store) => store.user);
  const jobs = useSelector((store) => store.setJobs);

 

  console.log('jobs', jobs);
  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      {user.user_type === null ?
        <UserTypeChoice />
        :
        <></>}
            {/* {jobs.map(job => {
          return (
      <table key={job.id} className='styled-table '>
              <thead>
                <tr>
                  <th scope="col">COMPANY</th>
                  <th scope="col">TITLE</th>
                  <th scope="col">DESCRIPTION</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td scope="row">{job.company_name}</td>
                  <td>{job.title}</td>
                  <td>{job.description}</td>
                  
                </tr>
              </tbody>
            </table>
              );
            })} */}

            
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
