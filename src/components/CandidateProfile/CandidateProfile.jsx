import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FormControl, InputLabel, Input, Button, Typography, Box } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  form: {
    display: 'flex',
    alignItems: 'center',
    flexDirection: 'column',
  },
});

function CandidateProfile() {

  const classes = useStyles();  // define the classes variable

  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    LinkedIn: '',
    ResumePath: '',
    CoverLetterPath: '',
  });


  const dispatch = useDispatch();
  const history = useHistory();

  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  }

  const submit = (event) => {
    event.preventDefault();
    dispatch({
      type: 'ADD_PROFILE',
      payload: formData
    });
    history.push('/ResumeCoverLetter');
  }


  const handleFormCompletion = () => {

    let button = document.getElementById('populateCandidateProfile');
    let form = document.getElementById('candidateProfile');

    button.addEventListener('click', function () {
      // Set the value of the form fields
      form.firstName.value = "Faduma ";
      form.lastName.value = "Siyad";
      form.email.value = "fsiyad@gmail.com";
      form.linkedin.value = "linkedin.com/faduma-siyad";

      setFormData({
        
        FirstName: "Faduma",
        LastName: "Siyad",
        Email: "fsiyad@google.com",
        LinkedIn: "linkedin.com/faduma-siyad",
        
      })

      console.log('This is the formData', formData);
    })
  };

let value;
  return (
    <>
      <Typography onClick={handleFormCompletion} id='populateCandidateProfile' variant="h3" style={{ textAlign: "center" }}>Welcome to your profile!</Typography>
      <Typography variant="h6" style={{ textAlign: "center" }}>This information will not be shared with the employers until you choose to share</Typography>
      <Box className="Profile">
        <form id='candidateProfile' className={classes.form} onSubmit={submit}>
          <InputLabel htmlFor="firstName">First Name</InputLabel>
          <FormControl>
            
            <Input
              id="firstName"
              name='FirstName'
              required
              onChange={event => handleFormChange(event)}
              value={value}
            />
          </FormControl>
          <InputLabel htmlFor="lastName">Last Name</InputLabel>
          <FormControl>
            
            <Input
              id="lastName"
              name='LastName'
              required
              onChange={event => handleFormChange(event)}
              value={value}
            />
          </FormControl>

          <InputLabel htmlFor="email">Email</InputLabel>
          <FormControl>
            
            <Input
              id="email"
              name='Email'
              required
              onChange={event => handleFormChange(event)}
              value={value}
            />
          </FormControl>

          <InputLabel htmlFor="linkedin">LinkedIn</InputLabel>
          <FormControl>
            <Input
              id="linkedin"
              name='LinkedIn'
              onChange={event => handleFormChange(event)}
              value={value}
            />
          </FormControl>
          <br />
          <Button variant="contained" color="primary" type="submit">Next</Button>
        </form>
      </Box>
    </>
  );

}

export default CandidateProfile;