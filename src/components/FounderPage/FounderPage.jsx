import React from 'react';
import { useHistory } from 'react-router-dom';
import { Typography } from '@mui/material';
import './FounderPage.css';

function FounderPage() {
  const history = useHistory();

  return (
    <div>
      <Typography variant='h4'>Founder Page</Typography>
    </div>
  );
}

export default FounderPage;
