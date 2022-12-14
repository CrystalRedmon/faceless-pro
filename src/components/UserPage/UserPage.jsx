import React, { useEffect } from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector } from 'react-redux';
import UserTypeChoice from '../UserTypeChoice/UserTypeChoice';
import { useDispatch } from 'react-redux';
import EmployerJobList from '../EmployerJobList/EmployerJobList';

function UserPage() {
  // this component doesn't do much to start, just renders some user reducer info to the DOM
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_JOBS' });
  }, []);

  const user = useSelector((store) => store.user);
  const jobs = useSelector((store) => store.jobs.allJobs);

  console.log('jobs', jobs);
  return (
    <div className="container">
      <h2>Welcome, {user.username}!</h2>
      <p>Your ID is: {user.id}</p>
      {user.user_type === null ?
        <UserTypeChoice />
        :
       <EmployerJobList/>

       }
    
      <LogOutButton className="btn" />
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
