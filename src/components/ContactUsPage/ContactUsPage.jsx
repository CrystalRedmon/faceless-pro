import React from 'react';
import { useHistory } from 'react-router-dom';
import { Typography } from '@mui/material';
import './ContactUsPage.css';
import Box from "@mui/material/Box";

function ContactUsPage() {
  const history = useHistory();

  return (
    <div>
      <Typography sx={{ml: 30, mt: 10}}  variant='h3'>Contact Us</Typography>

      <Typography sx={{ml: 50, mt: 5}}  variant='h6'>Let us know of any compliments or suggestions you have for Faceless Pro!</Typography>

      <Box sx={{ml: 60, mt: 10}} >
<a href="https://www.linkedin.com/company/facelesspro/" target="_blank">
<img class = "socialMediac" src = "images/linkedin.png"/>
</a>

<a href="https://www.instagram.com/facelessprollc/" target="_blank">
<img class = "socialMediac" src = "images/instagram.webp"/>
</a>

<a href="https://twitter.com/FacelessProLLC" target="_blank">
<img class = "socialMediac" src = "images/twitter.png"/>
</a>

<a href="https://www.facebook.com/Facelesspro" target="_blank">
<img class = "socialMediaf" src = "images/facebook.png"/>
</a>
  


      </Box>
    </div>
  );
}

export default ContactUsPage;
