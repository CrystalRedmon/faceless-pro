import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { FormControl, InputLabel, Input, Button } from '@material-ui/core';
import { Typography } from '@mui/material';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


function EditCandidateProfile() {
    const dispatch = useDispatch();
    const history = useHistory();
    const info = useSelector(store => store.candidateReducer.candidateInfo);

   

    // useEffect(() => {
    //     dispatch({
    //         type: 'FETCH_CANDIDATE_INFO',
    //     })
    // }, [])
    
 const save = (event) => {
    event.preventDefault();
    console.log('info',info);
    console.log('IM IN SAVE');
     dispatch({ type: 'UPDATE_PROFILE', payload: info });
     history.push('/education');
      }

     


console.log('info.first_name',info.first_name)

return(
    <>

    <h2>Welcome to your profile!</h2>



<div className="Profile">
<form onSubmit={save}>
  <FormControl>
    <InputLabel htmlFor="first-name">First Nameeee</InputLabel>
    <Input
     id="first-name"
      value= {String(info.first_name)}
     onChange={(evt) => dispatch({
        type: 'UPDATE_EDIT_PROFILE',
        payload: { first_name: evt.target.value }
    })}
    />
  </FormControl>
  <FormControl>
    <InputLabel htmlFor="last-name">Last Nameeee</InputLabel>
    <br></br>
    <Input
      id="last-name"
      onChange={(evt) => dispatch({
        type: 'UPDATE_EDIT_PROFILE',
        payload: { last_name: evt.target.value }
    })}
      value={info.last_name}
    />
  </FormControl>
  <FormControl>
    <InputLabel htmlFor="email">Email</InputLabel>
    <br></br>
    <Input
      id="email"
      onChange={(evt) => dispatch({
        type: 'UPDATE_EDIT_PROFILE',
        payload: { email: evt.target.value }
    })}
      value={info.email}
    />
  </FormControl>
  <FormControl>
    <InputLabel htmlFor="linkedin">LinkedIn</InputLabel>
    <br></br>
    <Input
      id="linkedin"
      onChange={(evt) => dispatch({
        type: 'UPDATE_EDIT_PROFILE',
        payload: { linkedin_link: evt.target.value }
    })}
      value={info.linkedin_link}
    />
  </FormControl>
  <FormControl>
    <InputLabel htmlFor="resume-path">Resume Path</InputLabel>
    <br></br>
    <Input
      id="resume-path"
      onChange={(evt) => dispatch({
        type: 'UPDATE_EDIT_PROFILE',
        payload: { resume_path: evt.target.value }
    })}
      value={info.resume_path}
    />
  </FormControl>
  <FormControl>
    <InputLabel htmlFor="cover-letter-path">Cover Letter Path</InputLabel>
    <br></br>
    <Input
      id="cover-letter-path"
      onChange={(evt) => dispatch({
        type: 'UPDATE_EDIT_PROFILE',
        payload: { cover_letter_path: evt.target.value }
    })}
      value={info.cover_letter_path}
    />
  </FormControl>
  <br />
  <Button variant="contained" color="primary" type="submit" onClick={save}>Save</Button>
</form>
</div>
</>
)
}

export default EditCandidateProfile;
