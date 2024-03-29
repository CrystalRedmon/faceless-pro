
import { Parallax } from 'react-parallax';
import CardMedia from '@mui/material/CardMedia';
import { CardActionArea } from '@mui/material';
import { Card, Grid, CardContent, Typography } from '@mui/material';

//import recruiter from '/Users/aminamuumin/primet3/faceless-pro/public/images/Screen Shot 2023-01-02 at 11.51.30 AM.png';
//import employment from '../images/employment stock image1.jpg';


import { useHistory } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './LandingPage.css';
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
    <div className="mycontainer">
      <Box sx={{
        marginLeft: 5, marginLeft: 5,

      }}>
        <Box><Typography variant="h3">Welcome Faceless Pro</Typography> </Box>

        <Box sx={{ marginBottom: 5, fontStyle: 'italic' }}>
          <Typography variant="h6">"Employment should be based on experience and not a person's identity."</Typography> </Box>
      </Box>
      <Box sx={{ ml: 5 }}><Typography variant="h5">Mission & Values</Typography></Box>
      <Box border={3}
        sx={{
          borderRadius: 2,
          boxShadow: 3,
          padding: 4,
          margin: 7.5,
          backgroundColor: '#e0e0e0',
          '&:hover': {
            backgroundColor: 'primary.main',
            opacity: [0.9, 0.8, 0.7],
          },
        }}>
        <Typography className="addBackground" sx={{ ml: 0 }} variant='p' >
          Our mission is to eliminate discrimination during the application process.
          At Faceless Pro, we believe that the best candidate should be determined by
          skills and experience and not on physical attributes.
          Our vision is to provide a one-stop platform that solves all the problems encountered during the recruitment process for both the employers and the employee.
        </Typography>
      </Box>

      <Box sx={{ mt: 10, mb: 10, ml: 5 }}>
        <Typography variant="h5">Discrimination in the recruitment process still persists today.</Typography>
      </Box>

      <Stack
        direction="row"
        divider={<Divider orientation="vertical" flexItem />}
        spacing={1}
        display='flex'
        marginBottom={20}
        marginLeft={5}
        marginRight={5}
      >

        <Box
          border={3}
          sx={{
            borderRadius: 2,
            boxShadow: 3,
            padding: 4,
            backgroundColor: '#f9e5bc',
            '&:hover': {
              backgroundColor: 'primary.main',
              opacity: [0.9, 0.8, 0.7],
            },
          }}>
          <Typography variant="p" > A study by the Nuffield College’s Centre for Social Investigation (CSI), </Typography>

          <br></br>
          <br></br>
          <Typography variant="p" > British job applicants from ethnic and racial minority groups sent 60% more resumes to get the same responses from employers, compared to White white applicants with the same skillset, experience, and qualifications. </Typography>
          <br></br><br></br>
          <Typography variant="p" >http://csi.nuff.ox.ac.uk/?p=1299 </Typography>

        </Box>

        <Box
          border={3}
          sx={{
            borderRadius: 2,
            boxShadow: 3,
            padding: 4,
            backgroundColor: '#f9e5bc',
            '&:hover': {
              backgroundColor: 'primary.main',
              opacity: [0.9, 0.8, 0.7],
            },
          }}>
          <Typography variant="p" > From a study done by Johannes Kepler University Linz in Austria, </Typography>

          <br></br>
          <br></br>
          <Typography variant="p" > Female applicants submitted applications with their photograph attached with or without headscarfs. Applicants with headscarfs faced high levels discrimination. In order to get the same amount of positive feedback as the other women, they'd have to apply for 4.5 times more jobs. </Typography>
          <br></br><br></br>
          <Typography variant="p" >https://docs.iza.org/dp10217.pdf </Typography>

        </Box>

        <Box
          border={3}
          sx={{
            borderRadius: 2,
            boxShadow: 3,
            padding: 4,
            backgroundColor: '#f9e5bc',
            '&:hover': {
              backgroundColor: 'primary.main',
              opacity: [0.9, 0.8, 0.7],
            },
          }}>
          <Typography variant="p" > According to a study done by the Harvard Business Review, </Typography>

          <br></br>
          <br></br>
          <Typography variant="p" > In the recruitment process if there is only one woman in the finalist pool, the chances of her being selected in virtually 0%. But if the finalist pool has at least two women applicants the chance of being selected jumps to nearly 80%  </Typography>
          <br></br><br></br>
          <Typography variant="p" >https://hbr.org/2016/04/if-theres-only-one-woman-in-your-candidate-pool-theres-statistically-no-chance-shell-be-hired</Typography>

        </Box>

      </Stack>


      <Typography variant="h5" sx={{ ml: 5 }}>Featured Jobs</Typography>
      <div className="grid">
        <div className="grid-col grid-col_8">
          <Stack
            direction="row"
            marginTop={5}
            display='flex'
            justifyContent={'space-between'}

          //   spacing={50}
          //   marginBottom = {10}
          >
            <Card variant="outlined" sx={{ width: 275, height: 250, margin: 2, boxShadow: 3, backgroundColor: '#00a0b0' }}>
              <CardContent>



                <div>
                  <h4> UX Cohort Instructor</h4>

                  <p> Prime Digital Academy </p>

                  <p> 301 S 4th Ave #577, Minneapolis, MN </p>

                </div>
              </CardContent>
            </Card>

            <Card variant="outlined" sx={{ width: 275, height: 250, margin: 2, boxShadow: 3, backgroundColor: '#00a0b0' }}>
              <CardContent>



                <div>
                  <h4> Chemical Engineer</h4>

                  <p> Honeywell </p>

                  <p> 1433 NE Stinson Blvd, Minneapolis, MN 55413 </p>

                </div>
              </CardContent>
            </Card>


            <Card variant="outlined" sx={{ width: 275, height: 250, margin: 2, boxShadow: 3, backgroundColor: '#00a0b0' }}>
              <CardContent>



                <div>
                  <h4> Data Analyst</h4>

                  <p> Target </p>

                  <p> Target Plaza South, 1000 Nicollet Mall, Minneapolis, MN 55403</p>

                </div>
              </CardContent>
            </Card>


            {/* {recentJobs.map(job =>
                    <Box><CandidateJobItem key={job.id} job={job} /> </Box>
                )} */}

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