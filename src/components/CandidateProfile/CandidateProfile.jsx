import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { FormControl, InputLabel, Input, Button, Typography } from '@material-ui/core';


function CandidateProfile() {
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

  


  // console.log(FirstName, "formData");


  const submit = (event) => {
    {
      event.preventDefault();

      dispatch({
        type: 'ADD_PROFILE',
        payload: formData
      });

      // history.push('/education');
      history.push('/ResumeCoverLetter');
    }
  }

  const handleFormCompletion = () => {

    let button = document.getElementById('populateCandidateProfile');
    let form = document.getElementById('candidateProfile');

    button.addEventListener('click', function () {
      // Set the value of the form fields
      form.firstName.value = "It's my first name";
      form.lastName.value = "It's my last name";
      form.email.value = "It's my email";
      form.linkedin.value = "It's my link";

      setFormData({
        FirstName: "It's my first name",
        LastName: "It's my last name",
        Email: "It's my email",
        LinkedIn: "It's my link",
        ...formData,
      })


      console.log('This is the formData', formData);
    })
  };

let value;

  return (
    <>
      <h2 onClick={handleFormCompletion} id='populateCandidateProfile'>Welcome to your profile!</h2>
      <h3>This information will not be shared with the employers until you choose to share</h3>
      <div className="Profile">
        <form id='candidateProfile' onSubmit={submit}>
          <InputLabel htmlFor="firstName">First Name</InputLabel>
          <FormControl>

            <Input
              id="firstName"
              name='FirstName'
              value={value}
              required
              onChange={event => handleFormChange(event)}

            />
          </FormControl>
          <InputLabel htmlFor="lastName">Last Name</InputLabel>
          <FormControl>

            <Input
              id="lastName"
              name='LastName'
              value={value}
              required
              onChange={event => handleFormChange(event)}

            />
          </FormControl>
          <InputLabel htmlFor="email">Email</InputLabel>
          <FormControl>

            <Input
              id="email"
              name='Email'
              
              required
              onChange={event => handleFormChange(event)}
              // value={formData.Email}
            />
          </FormControl>

          <InputLabel htmlFor="linkedin">LinkedIn</InputLabel>
          <FormControl>

            <Input
              id="linkedin"
              name='LinkedIn'
              onChange={event => handleFormChange(event)}
              // value={formData.LinkedIn}
            />
          </FormControl>

          {/* <FormControl>
            <InputLabel htmlFor="resume-path">Resume Path</InputLabel>
            <Input
              id="resume-path"
              name='ResumePath'
              onChange={event =>handleFormChange(event)}
              value={formData.ResumePath}
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="cover-letter-path">Cover Letter Path</InputLabel>
            <Input
              id="cover-letter-path"
              name='CoverLetterPath'
              onChange={event => handleFormChange(event)}
              value={formData.CoverLetterPath}
            />
          </FormControl> */}

          <br />
          <Button variant="contained" color="primary" type="submit">Next</Button>
        </form>
      </div>
    </>
  );
}

export default CandidateProfile;