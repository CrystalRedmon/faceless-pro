// import { Link, useRouteMatch } from 'react-router-dom';
// import './Breadcrumbs.css';

// function Breadcrumbs() {
//   let match = useRouteMatch();
//   let links = [
//     { label: 'Education', path: 'Education' },
//     { label: 'Education', path: 'Education' },
//     { label: 'Experience', path: 'Experience' },
//     { label: 'Skills', path: 'Skills' },
//     { label: 'Complete Profile', path: 'VoluntaryIdentification' },
//   ];
// 
//   return (
//     <nav>
//       <ul className="breadcrumb">
//         {links.map((link) => (
//           <li key={link.path}>
//             <Link to={`${match.url}${link.path}`} className={match.isExact ? 'active' : ''}>
//               {link.label}
//             </Link>
//           </li>
//         ))}
//       </ul>
//       <h1>Complete your Profile</h1>
//     </nav>
//   );
// }

// export default Breadcrumbs;

// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Breadcrumbs from '@material-ui/core/Breadcrumbs';
// import Link from '@material-ui/core/Link';
// import Typography from '@material-ui/core/Typography';

// const useStyles = makeStyles((theme) => ({
//   link: {
//     display: 'flex',
//   },
//   icon: {
//     marginRight: theme.spacing(0.5),
//     width: 20,
//     height: 20,
//   },
// }));

// function CandidateBreadcrumb() {
//   const classes = useStyles();

//   return (
//     <Breadcrumbs aria-label="breadcrumb">
//       <Link color="inherit" className={classes.link}>
//         <Typography>Education</Typography>
//       </Link>
//       <Link color="inherit"  className={classes.link}>
//         <Typography>Experience</Typography>
//       </Link>
//       <Link color="inherit"  className={classes.link}>
//         <Typography>Skills</Typography>
//       </Link>
//       <Link color="inherit"  className={classes.link}>
//         <Typography>Hyperlink</Typography>
//       </Link>
//     </Breadcrumbs>
//   );
// }

// export default CandidateBreadcrumb;


import React from 'react';
import { useLocation } from 'react-router-dom';
import { Breadcrumbs, Link, Typography } from '@material-ui/core';

function CandidateBreadcrumb() {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter(x => x);

  return (
    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" >
        Education
      </Link>
      <Link color="inherit" >
        Experience
      </Link>
      <Link color="inherit">
        Skills
      </Link>
      <Link color="inherit">
        Hyperlink
      </Link>
      <Typography color="textPrimary">{pathnames[pathnames.length - 1]}</Typography>
    </Breadcrumbs>
  );
}

export default CandidateBreadcrumb;


