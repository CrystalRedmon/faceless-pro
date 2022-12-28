import React from 'react';
import { useHistory } from 'react-router-dom';
import { Typography } from '@mui/material';
import Avatar from '@mui/material/Avatar';
import './FounderPage.css';
import Box from "@mui/material/Box";

function FounderPage() {
  const history = useHistory();

  return (
    <>
    <Box>
      <Box>
      <Typography sx={{ml: 22.5, mb: 5}}variant='h4'>Abyan Nur</Typography>
      <Avatar alt="Abyan Nur Headshot" src="./images/Abyan.jpeg" sx={{ml: 15, width: 300, height: 400 }} />
      <p class = "intro">Hi, my name is Abyan and I am the founder and CEO of Faceless Pro.</p>
      </Box>


      <Box
       sx={{
        boxShadow: 3,
        position: 'absolute', left: 550, top:150,
        width: 970,
        height: 420,
        backgroundColor: 'gray',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}>
      <h3>Faceless Pro's Origin</h3>
      <p>
My story begins spring of 2017. 
I was on various platforms searching for a part time job that would supplement my income. 
I wasn’t picky on locations or benefits.
As many people in my predicament, my search brought me to well-known job boards. 
After creating a profile and updating my resume, I scoured through the hundreds of postings and applied for ones that suited my experience and needs. 
As luck would have it, I applied to about two dozen jobs. Of that amount, I only heard back from two companies. 
<br></br><br></br>At a time when race issues were at the forefront of our society, I couldn’t help but think that my applications weren’t being judged fairly. 
I couldn’t help but wonder if my name was a big indicator of my race and religion and hiring managers were using that to discriminate against my application. 
I scoured the internet for information on workplace discrimination when it comes to the hiring process and found countless articles. 
This led me to conduct my own personal experiment. 
What if I changed my name and company names on the application and submitted the same resume under the new name? 
After making those changes, I immediately applied for the same exact jobs and to my complete surprise, I heard back from more than a dozen of them asking me to interview. 
<br></br><br></br>This is the reason why I started Faceless Pro. I believe that every individual has the right to equal opportunities in the workplace. I believe that skill and experience should be the scale in which job applicants are judged by. 
Not race, gender, age, religion, sexuality, or disability status. With Faceless Pro, we guarantee that job seekers are treated fairly across the board and that companies are recruiting the best of the best.</p>
      </Box>
    </Box>

<Box> 
<a href="https://www.linkedin.com/in/abyannur/" target="_blank">
<img class = "socialMedia" src = "images/linkedin.png"/>
</a>

<a href="https://www.linkedin.com/in/abyannur/" target="_blank">
<img class = "socialMedia" src = "images/instagram.webp"/>
</a>

<a href="https://www.linkedin.com/in/abyannur/" target="_blank">
<img class = "socialMedia" src = "images/twitter.png"/>
</a>

<a href="https://www.linkedin.com/in/abyannur/" target="_blank">
<img class = "socialMedia" src = "images/gmail.png"/>
</a>
  








 </Box>

</>
  );
}

export default FounderPage;
