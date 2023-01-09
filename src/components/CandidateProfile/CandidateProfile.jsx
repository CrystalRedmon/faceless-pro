import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FormControl, InputLabel, Input, Button, Typography } from '@material-ui/core';
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
  return (
    <>
      <Typography variant="h3" style={{ textAlign: "center" }}>Welcome to your profile!</Typography>
      <Typography variant="h6" style={{ textAlign: "center" }}>This information will not be shared with the employers until you choose to share</Typography>
      <div className="Profile">
        <form className={classes.form} onSubmit={submit}>
          <FormControl>
            <InputLabel htmlFor="first-name">First Name</InputLabel>
            <Input
              id="first-name"
              name='FirstName'
              required
              onChange={event => handleFormChange(event)}
              value={formData.FirstName}
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="last-name">Last Name</InputLabel>
            <Input
              id="last-name"
              name='LastName'
              required
              onChange={event => handleFormChange(event)}
              value={formData.LastName}
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
              id="email"
              name='Email'
              required
              onChange={event => handleFormChange(event)}
              value={formData.Email}
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="linkedin">LinkedIn</InputLabel>
            <Input
              id="linkedin"
              name='LinkedIn'
              onChange={event => handleFormChange(event)}
              value={formData.LinkedIn}
            />
          </FormControl>
          <br />
          <Button variant="contained" color="primary" type="submit">Next</Button>
        </form>
      </div>
    </>
  );

}

export default CandidateProfile;