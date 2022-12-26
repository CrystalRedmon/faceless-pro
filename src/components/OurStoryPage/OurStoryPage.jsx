import React from 'react';
import { useHistory } from 'react-router-dom';
import { Typography } from '@mui/material';
import './OurStoryPage.css';
import Box from "@mui/material/Box";

function OurStoryPage() {
  const history = useHistory();

  return (
    <div>
      <Typography variant='h4'>Our Story</Typography>
      <Box
      sx={{
        width: 400,
        height: 180,
        backgroundColor: 'gray',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}>
        <h3> Faceless Pro's Mission</h3> 
        <p>Our mission is to eliminate discrimination 
during the application process. <br></br>At Faceless Pro, 
we believe that the best candidate should be determined by <br></br>
 skills and experience and not on physical attributes.</p>
      </Box>

      <Box
      sx={{
        width: 700,
        height: 100,
        backgroundColor: 'gray',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}>
        <h3> Faceless Pro's Vision</h3> 
        <p>Our vision is to provide a one-stop platform that solves all the problems encountered during the recruitment process for both the employers and the employee.</p>
      </Box>


    </div>
  );
}

export default OurStoryPage;
