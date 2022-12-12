import React from 'react';
import { useHistory } from 'react-router-dom';
import {Typography} from '@mui/material';
import './OurStoryPage.css'; 

function OurStoryPage() {
  const history = useHistory();

  return (
    <div>
   <Typography variant = 'h4'>Our Story Page</Typography>
    </div>
  );
}

export default OurStoryPage;
