import React from 'react';
import { useHistory } from 'react-router-dom';
import {Typography} from '@mui/material';
import './ContactUsPage.css'; 

function ContactUsPage() {
  const history = useHistory();

  return (
    <div>
   <Typography variant = 'h4'>Contact Us Page</Typography>
    </div>
  );
}

export default ContactUsPage;
