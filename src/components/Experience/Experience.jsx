import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FormControl, InputLabel, Input, Button } from '@material-ui/core';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


function CandidateProfile() {
  const history = useHistory();
  const dispatch = useDispatch();

  const info = useSelector(store => store.candidateReducer.candidateInfo);
  const [formData, setFormData] = useState({
    FirstName: '',
    LastName: '',
    Email: '',
    LinkedIn: '',
    ResumePath: '',
    CoverLetterPath: ''
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



  const submit = (event) => {{
    event.preventDefault();
    dispatch({ type: 'ADD_PROFILE', payload: formData });

  }}
  const save = (event) => {{
    event.preventDefault();
    dispatch({ type: 'ADD_PROFILE', payload: info[0] });

  }}

  // console.log(info[0].profile[0].first_name);
const nextpage = (event)=> {
  history.push('/education');
}
  return (
    <>
      <h2>Welcome to your profile!</h2>

    {info.length > 0 ?        
      <div className="Profile">
      <form onSubmit={save}>
        {/* <FormControl>
          <InputLabel htmlFor="first-name">First Nameeee</InputLabel> */}
          <TextField
           id="first-name"
           name='FirstName'
            value= {String(info[0].profile[0].first_name)}
            onChange={(evt) => dispatch({
              type: 'UPDATE_EDIT_PROFILE',
              payload: { FirstName: evt.target.value }
          })}
          />
        {/* </FormControl> */}
        {/* <FormControl>
          <InputLabel htmlFor="last-name">Last Nameeee</InputLabel>
          <Input
            id="last-name"
            name='LastName'
            onChange={event => handleFormChange(event)}
            value={info[0].profile[0].last_name}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="email">Email</InputLabel>
          <Input
            id="email"
            name='Email'
            onChange={event => handleFormChange(event)}
            value={info[0].profile[0].email}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="linkedin">LinkedIn</InputLabel>
          <Input
            id="linkedin"
            name='LinkedIn'
            onChange={event => handleFormChange(event)}
            value={info[0].profile[0].linkedin_link}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="resume-path">Resume Path</InputLabel>
          <Input
            id="resume-path"
            name='ResumePath'
            onChange={event =>handleFormChange(event)}
            value={info[0].profile[0].resume_path}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="cover-letter-path">Cover Letter Path</InputLabel>
          <Input
            id="cover-letter-path"
            name='CoverLetterPath'
            onChange={event => handleFormChange(event)}
            value={info[0].profile[0].cover_letter_path}
          />
        </FormControl> */}
        <br />
        <Button variant="contained" color="primary" type="submit" onClick={nextpage}>Save</Button>
      </form>
    </div>

      :

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


    } 

    </>
  );
}

export default CandidateProfile;