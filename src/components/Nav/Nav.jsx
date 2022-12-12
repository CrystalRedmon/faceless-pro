import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import { Typography} from '@mui/material';
import Button from '@mui/material/Button';

function Nav() {
  const user = useSelector((store) => store.user);

 

  return (
    <div className="nav">
      <Avatar alt="Faceless Pro Logo" src="./images/clientLogo.png" sx={{ width: 50, height: 50 }}/>
      <Link to="/home">
        <Typography className="nav-title" variant='h5'> Faceless Pro</Typography>
      </Link>
      <div>

      <Link className="navLink" to="/about">
          About Us
        </Link>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )}

        {/* If a user is logged in, show these links */}
        {user.id && (
          <>
            <Link className="navLink" to="/user">
              Home
            </Link>

            <Link className="navLink" to="/info">
              Info Page
            </Link>

            <LogOutButton className="navLink" />
          </>
        )}

 
      </div>
    </div>
  );
}

export default Nav;
