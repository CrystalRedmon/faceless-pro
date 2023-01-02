
import { Parallax } from 'react-parallax';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
//import recruiter from '/Users/aminamuumin/primet3/faceless-pro/public/images/Screen Shot 2023-01-02 at 11.51.30 AM.png';
//import employment from '../images/employment stock image1.jpg';


import { useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './LandingPage.css';
import { Typography } from '@material-ui/core';
import Box from "@mui/material/Box";
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import CandidateJobItem from '../CandidateJobItem/CandidateJobItem';



// CUSTOM COMPONENTS
import RegisterForm from '../RegisterForm/RegisterForm';

function LandingPage() {
  const recentJobs = useSelector(store => store.candidateReducer.candidateJobs)
  const history = useHistory();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'FETCH_RECENT_JOBS' });
}, []);

  // const onLogin = (event) => {
  //   history.push('/login');
  // };

  return (
    <div className="container">
      <Box><Typography variant = "h4">Mission & Values</Typography></Box>
<Box sx={{ml: 10, mt: 5}}>
    <Typography sx={{ml: 100}} variant = 'h6' >
    Our mission is to eliminate discrimination during the application process.
At Faceless Pro, we believe that the best candidate should be determined by
skills and experience and not on physical attributes. 
Our vision is to provide a one-stop platform that solves all the problems encountered during the recruitment process for both the employers and the employee.
            </Typography>
            </Box>

    <Box sx={{mt: 10, mb:10}}> 
    <Typography variant = "h4">Discrimination in the hiring process still persists today.</Typography>
    </Box>

    <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={8}
        marginBottom = {10}
      >

    <Box
      border = {3}
      sx={{
        borderRadius: 2,
        boxShadow: 3,
        pl:3,
        pr:3,
        ml:5,
        width: 310,
        height: 300,
        backgroundColor: '#b2dfdb',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}>
        <Typography variant = "h6" > A study by the Nuffield College’s Centre for Social Investigation (CSI), </Typography>
       
 <br></br>
 <br></br>
        <Typography variant = "p" > British job applicants from ethnic and racial minority groups sent 60% more resumes to get the same responses from employers, compared to White white applicants with the same skillset, experience, and qualifications. </Typography>
        <br></br><br></br>
        <Typography variant = "p" >http://csi.nuff.ox.ac.uk/?p=1299 </Typography>

        </Box>

        <Box
      border = {3}
      sx={{
        borderRadius: 2,
        boxShadow: 3,
        pl:3,
        pr:3,
        ml:5,
        width: 310,
        height: 310,
        backgroundColor: '#b2dfdb',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}>
        <Typography variant = "h6" > From a study done by Johannes Kepler University Linz in Austria, </Typography>
       
 <br></br>
 <br></br>
        <Typography variant = "p" > Female applicants submitted applications with their photograph attached with or without headscarfs. Applicants with headscarfs faced high levels discrimination. In order to get the same amount of positive feedback as the other women, they'd have to apply for 4.5 times more jobs. </Typography>
        <br></br><br></br>
        <Typography variant = "p" >https://docs.iza.org/dp10217.pdf </Typography>

        </Box>

        <Box
      border = {3}
      sx={{
        borderRadius: 2,
        boxShadow: 3,
        pl:3,
        pr:3,
        ml:5,
        width: 310,
        height: 310,
        backgroundColor: '#b2dfdb',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}>
        <Typography variant = "h6" > According to a study done by the Harvard Business Review, </Typography>
       
 <br></br>
 <br></br>
        <Typography variant = "p" > In the recruitment process if there is only one woman in the finalist pool, the chances of her being selected in virtually 0%. But if the finalist pool has at least two women applicants the chance of being selected jumps to nearly 80%  </Typography>
        <br></br><br></br>
        <Typography variant = "p" >https://hbr.org/2016/04/if-theres-only-one-woman-in-your-candidate-pool-theres-statistically-no-chance-shell-be-hired</Typography>

        </Box>

      </Stack>


    <Typography variant = "h4">Featured Jobs</Typography>
      <div className="grid">
        <div className="grid-col grid-col_8">
        <Stack
        direction="row"
       marginLeft={30}
       marginTop={5}
        spacing={50}
        marginBottom = {10}
      >

          
              {recentJobs.map(job =>
                    <Box><CandidateJobItem key={job.id} job={job} /> </Box>
                )}
          
          </Stack>
        </div>
        {/* <div className="grid-col grid-col_4">
          <RegisterForm />
          <center>
            <h4>Already a Member?</h4>
            <button className="btn btn_sizeSm" onClick={onLogin}>
              Login
            </button> */}
          {/* </center>
        </div> */}
      </div>
    </div>
  );
}
// Here is a link to more statistics if we want to change them.
// https://www.diversity-inclusion-platform.ch/en/how-to-deal-with-unconscious-biases-in-human-resources-decisions/?noredirect=en-US#:~:text=Unconscious%20biases%20can%20permeate%20the,offer%20to%20the%20favored%20candidate.

export default LandingPage;