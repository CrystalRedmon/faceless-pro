
import useScrollTrigger from '@mui/material/useScrollTrigger';
import PropTypes from 'prop-types';
import MenuIcon from '@mui/icons-material/Menu';
import useStyles from '../styles/styles';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

import React from 'react';
import { Link } from 'react-router-dom';
import LogOutButton from '../LogOutButton/LogOutButton';
import './Nav.css';
import { useSelector } from 'react-redux';
import Avatar from '@mui/material/Avatar';
import { Typography, Menu, MenuList, Box } from '@mui/material';
import { useState } from 'react';
import { Button } from '@mui/material';

function Nav() {
  const user = useSelector((store) => store.user);
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpenMenu = e => {
    setAnchorEl(e.currentTarget);
  }

  const handleCloseMenu = () => {
    setAnchorEl(null);
  }


  return (
    <div className="nav">
      <Avatar alt="Faceless Pro Logo" src="./images/clientLogo.png" sx={{ width: 50, height: 50 }} />
      
      <div className = "Faceless Pro">
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
      
      <div>
        <Button className="navLink"
          onClick={handleOpenMenu}
          aria-controls='menu'
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
        {user.user_type === 'employer' && (
          <>
            <Link className="navLink" to="/user">
              Employer Profile
            </Link>

            <Link className="navLink" to="/jobList">
              Posted Jobs
            </Link>

            <LogOutButton className="navLink" />
          </>
        )}

        {user.user_type === 'candidate' && (
          <>
            <Link className="navLink" to="/user">
              Search Jobs
            </Link>


            <Link className="navLink" to="/profile">
              My Profile 

            </Link>

            <Link className="navLink" to="/savedjobs">
              Saved Jobs
            </Link>

            <Link className="navLink" to="/applied">
              Applied Jobs
            </Link>

            {/* <Link className="navLink" to="/info">
              Info Page
            </Link> */}

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


// import {
//   AppBar,
//   Typography,
//   Link,
//   Box,
//   Toolbar,
//   List,
//   ListItem,
//   ListItemText,
//   IconButton,
//   Drawer,
// } from '@mui/material';
// import React from 'react';
// import useScrollTrigger from '@mui/material/useScrollTrigger';
// import PropTypes from 'prop-types';
// import MenuIcon from '@mui/icons-material/Menu';
// import useStyles from '../styles/styles';
// import { useTheme } from '@mui/material/styles';
// import useMediaQuery from '@mui/material/useMediaQuery';

// function ElevationScroll(props) {
//   const { children, window } = props;
//   // Note that you normally won't need to set the window ref as useScrollTrigger
//   // will default to window.
//   // This is only being set here because the demo is in an iframe.
//   const trigger = useScrollTrigger({
//     disableHysteresis: true,
//     threshold: 0,
//     target: window ? window() : undefined,
//   });

//   return React.cloneElement(children, {
//     elevation: trigger ? 4 : 0,
//   });
// }

// ElevationScroll.propTypes = {
//   children: PropTypes.element.isRequired,
//   /**
//    * Injected by the documentation to work in an iframe.
//    * You won't need it on your project.
//    */
//   window: PropTypes.func,
// };

// const Nav = (props) => {
//   const classes = useStyles();
//   const links = [
//     { id: 1, route: 'Our Story', url: '/story' },
//     { id: 2, route: 'Founder', url: '/founder' },
//     { id: 3, route: 'Contact Us', url: 'h/contact' },
//   ];

//   const [state, setState] = React.useState({
//     right: false,
//   });

//   const toggleDrawer = (anchor, open) => (event) => {
//     if (
//       event.type === 'keydown' &&
//       (event.key === 'Tab' || event.key === 'Shift')
//     ) {
//       return;
//     }

//     setState({ ...state, [anchor]: open });
//   };

//   const list = (anchor) => (
//     <Box
//       sx={{ width: 250 }}
//       role="presentation"
//       onClick={toggleDrawer(anchor, false)}
//       onKeyDown={toggleDrawer(anchor, false)}
//     >
//       <List>
//         {links.map((link) => (
//           <ListItem button key={link.id}>
//             <ListItemText primary={link.route} />
//           </ListItem>
//         ))}
//       </List>
//     </Box>
//   );

//   const theme = useTheme();
//   const matches = useMediaQuery(theme.breakpoints.down('sm'));

//   return (
//     <Box sx={{ marginBottom: '70px' }}>
//       <ElevationScroll {...props}>
//         <AppBar>
//           <Toolbar className={classes.toolBar}>
//             <Link href="#" underline="none">
//               <Typography variant="h5" className={classes.logo}>
//                 MUI Sample
//               </Typography>
//             </Link>

//             {matches ? (
//               <Box>
//               <IconButton
//                 size="large"
//                 edge="end"
//                 color="inherit"
//                 aria-label="menu"
//                 onClick={toggleDrawer('right', true)}
//               >
//                 <MenuIcon className={classes.menuIcon} fontSize="" />
//               </IconButton>

//               <Drawer
//                 anchor="right"
//                 open={state['right']}
//                 onClose={toggleDrawer('right', false)}
//               >
//                 {list('right')}
//               </Drawer>
//             </Box>
//             ): <Box
//               sx={{
//                 display: 'flex',
//                 justifyContent: 'space-between',
//                 flexGrow: '0.1',
//               }}
//             >
//               {links.map((link) => (
//                 <Link href={link.url} target="_blank" underline="none" key={link.id}>
//                   <Typography className={classes.link}>{link.route}</Typography>
//                 </Link>
//               ))}
//             </Box>}
           
//           </Toolbar>
//         </AppBar>
//       </ElevationScroll>
//     </Box>
//   );
// };

// export default Nav;