import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FormControl, InputLabel, Input, Button } from '@material-ui/core';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';

function CandidateProfile() {
  const history = useHistory();
  const dispatch = useDispatch();

  const profile = useSelector(store => store.candidateReducer.candidateInfo);
  const [formData, setFormData] = useState({
    FirstName: profile.first_name,
    LastName: profile.last_name,
    Email: profile.email,
    LinkedIn: profile.linkedin_link,
    ResumePath: profile.resume_path,
    CoverLetterPath: profile.cover_letter_path,
  });


  useEffect(() => {
    dispatch({
        type: 'FETCH_CANDIDATE_INFO',
    })
}, [])



  const handleFormChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });

  }

  // console.log(FirstName, "formData");



  const submit = (event) => {{
    event.preventDefault();
    dispatch({ type: 'ADD_PROFILE', payload: formData });

  }

}
const nextpage = (event)=> {
  history.push('/education');
}
  return (
    <>
      <h2>Welcome to your profile!</h2>



         
  


      
      <div className="Profile">
        <form onSubmit={submit}>
          <FormControl>
            <InputLabel htmlFor="first-name">First Name</InputLabel>
            <Input
              id="first-name"
              name='FirstName'
              onChange={event => handleFormChange(event)}
              value={formData.FirstName}
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="last-name">Last Name</InputLabel>
            <Input
              id="last-name"
              name='LastName'
              onChange={event => handleFormChange(event)}
              value={formData.LastName}
            />
          </FormControl>
          <FormControl>
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input
              id="email"
              name='Email'
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
          <FormControl>
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
          </FormControl>
          <br />
          <Button variant="contained" color="primary" type="submit" onClick={nextpage}>Submit</Button>
        </form>
      </div>

    </>
  );
}

export default CandidateProfile;
