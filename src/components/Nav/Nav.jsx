import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import { Typography, Menu, MenuList, Box } from '@mui/material';
import { useState } from 'react';

function Nav() {
  const user = useSelector((store) => store.user);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = e => {
    setAnchorEl(e.currentTarget);
  }

  const handleCloseMenu = () => {
    setAnchorEl(null);
  }

  console.log(user);

  return (
    <div className="nav">
      <Box sx={{display: 'flex', alignItems: 'center', marginLeft: 1}}>
        <Avatar alt="Faceless Pro Logo" src="./images/clientLogo.png" sx={{ width: 50, height: 50, marginRight: 1 }} />

        <div>
          {user.id ?
            // If the user is already logged in, 
            // redirect to the /user page
            <Link to="/user">
              <Typography className="nav-title" variant='h5' color='#f2f2f2'> Faceless Pro</Typography>
            </Link>
            :
            // Otherwise, show the login page
            <Link to="/home">
              <Typography className="nav-title" variant='h5' color='#f2f2f2'> Faceless Pro</Typography>
            </Link>
          }
        </div>
      </Box>


      
      <div>
        <Link className="navLink"
          onClick={handleOpenMenu}
          aria-controls='menu'
          sx={{color: 'white'}}
        >
          About Us
        </Link>
        {/* If no user is logged in, show these links */}
        {!user.id && (
          // If there's no user, show login/registration links
          <Link className="navLink" to="/login">
            Login / Register
          </Link>
        )}

        {/* if user type is employer AND their user_info is null,
         ie. haven't filled out their required inputs, only allow them to do so until they complete it */}
        {(user.user_type === 'employer' && user.user_info === null) && (
          <>
            <Link className="navLink" to="/user">
              Employer Profile
            </Link>

            <LogOutButton className="navLink" />
          </>
        )}

        {/* if the user type is employer AND they have completed their profile, they can post jobs and edit their profile! */}
        {(user.user_type === 'employer' && user.user_info != null) && (
          <>
            <Link className="navLink" to="/user/editprofile">
              Employer Profile
            </Link>

            <Link className="navLink" to="/jobList">
              Posted Positions
            </Link>

            <LogOutButton className="navLink" />
          </>
        )}

        {user.user_type === 'candidate' && (
          <>
            <Link className="navLink" to="/user">
              Search Jobs
            </Link>


            <Link className="navLink" to="/CandidatePage">
              My Profile 

            </Link>

            <Link className="navLink" to="/savedjobs">
              Saved Jobs
            </Link>

            <Link className="navLink" to="/applied">
              Applied Jobs
            </Link>

            <LogOutButton className="navLink" />
          </>
        )}

        {user.user_type === null && (
          <>
            <LogOutButton className="navLink" />
          </>
        )}

        <Menu id='menu' onClose={handleCloseMenu} anchorEl={anchorEl} open={Boolean(anchorEl)}>
          <MenuList><Link to="/story">Our Story</Link></MenuList>
          <MenuList><Link to="/founder">Founder</Link></MenuList>
          <MenuList><Link to="/contact">Contact Us</Link></MenuList>
        </Menu>


      </div>
    </div>

  );
}

export default Nav;