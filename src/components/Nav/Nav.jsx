import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import { Typography, Menu, MenuList, Box} from '@mui/material';
import { useState } from 'react';
import Button from '@mui/material/Button';

function Nav() {
  const user = useSelector((store) => store.user);
  const [anchorEl,setAnchorEl] = useState(null);

 const handleOpenMenu = e => {
  setAnchorEl(e.currentTarget);
 }

 const handleCloseMenu = () => {
  setAnchorEl(null);
 }

  return (
    <div className="nav">
      <Avatar alt="Faceless Pro Logo" src="./images/clientLogo.png" sx={{ width: 50, height: 50 }}/>
      <Link to="/home">
        <Typography className="nav-title" variant='h5' color = '#f2f2f2'> Faceless Pro</Typography>
      </Link>
      <div>
          <Button className="navLink" 
          onClick = {handleOpenMenu}
           aria-controls= 'menu'
           > 
          About Us
        </Button>
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
            <Link className="navLink" to="/CandidateProfile">
              Profile
            </Link>

            <Link className="navLink" to="/info">
              Info Page
            </Link>

            <Link className="navLink" to="/job">
              Post Job
            </Link>

            <LogOutButton className="navLink" />
          </>
        )}
        
        <Menu id = 'menu' onClose= {handleCloseMenu} anchorEl = {anchorEl} open = {Boolean(anchorEl)}>
        <MenuList><Link to = "/story">Our Story</Link></MenuList>
        <MenuList><Link to = "/founder">Founder</Link></MenuList>
        <MenuList><Link to = "/contact">Contact Us</Link></MenuList>
        </Menu>

 
      </div>
    </div>
    
  );
}

export default Nav;
