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


