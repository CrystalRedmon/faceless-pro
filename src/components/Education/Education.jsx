import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, FormControl, InputLabel, Box, TextField, TextareaAutosize } from '@material-ui/core';
import { Typography } from '@mui/material';

function Education() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [formFields, setFormFields] = useState([
    { School: '', Major: '', Dates: '', Notes: '' },
  ])

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  }

  const submit = (e) => {
    e.preventDefault();

    formFields.forEach((form) => {
      dispatch({
        type: 'ADD_EDUCATION',
        payload: {
          School: form.School,
          Major: form.Major,
          Dates: form.Dates,
          Notes: form.Notes,
        },
      });
      history.push('/experience');
    });
  };

  const addFields = () => {
    let object = {
      School: '',
      Major: '',
      Dates: '',
      Notes: ''
    }

    setFormFields([...formFields, object])
  }

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1)
    setFormFields(data)
  }




  let value;


  return (
    <>

      <Box className='container'>

        {/* <CandidateBreadcrumb /> */}
        <Typography  id='populateCandidateEducation' variant='h3' style={{ marginTop: '1em' }}>Education</Typography>
        <Typography variant="h6" style={{ marginTop: '2em', marginBottom: '2em' }}>This information will be shared with employers as part of your application.</Typography>
        <Typography>Step 3 of 6</Typography>

        <div sx={{ marginTop: '5em' }} className="Education">
          <form style={{ marginTop: '2em' }} id="candidateEducation" onSubmit={submit}>
            {formFields.map((form, index) => {
              return (
                <div key={index} style={{ display: 'flex', flexDirection: 'column' }}>

                  <InputLabel htmlFor="schoolName">School Name</InputLabel>
                  <FormControl>

                    <TextField
                      className='textField'
                      style={{ width: '30em', marginBottom: '2em' }}
                      id="schoolName"
                      name='School'
                      onChange={event => handleFormChange(event, index)}
                      value={value}
                    />
                  </FormControl>

                  <InputLabel htmlFor="major">Qualifications</InputLabel>
                  <FormControl>

                    <TextField
                      className='textField'
                      style={{ width: '30em', marginBottom: '2em' }}
                      id="major"
                      name='Major'
                      onChange={event => handleFormChange(event, index)}
                      value={value}
                    />
                  </FormControl>

                  <InputLabel htmlFor="dates">Dates Attended</InputLabel>
                  <FormControl>

                    <TextField
                      className='textField'
                      style={{ width: '30em', marginBottom: '2em' }}
                      id="dates"
                      name='Dates'
                      onChange={event => handleFormChange(event, index)}
                      value={value}
                    />
                  </FormControl>

                  <InputLabel htmlFor="notes">Notes</InputLabel>
                  <FormControl>

                    <TextareaAutosize

                      minRows={10}
                      className='textField'
                      style={{ width: '35em', marginBottom: '2em' }}
                      id="notes"
                      name='Notes'
                      onChange={event => handleFormChange(event, index)}
                      value={value}
                    />
                  </FormControl>

                  <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3em', width: '25%' }}>
                    <Button sx={{ marginRight: '10em', }} variant="contained" color="error" className='formButtons' onClick={() => removeFields(index)}>Remove</Button>

                    <Button variant="contained" color="error" sx={{ marginBottom: '3em' }} className='formButtons' onClick={addFields}>add more</Button>
                  </Box>

                </div>
              )
            })}
          </form>
          <Button className='formButtons' variant="contained" color="primary" onClick={submit}>Next</Button>
          <br />
        </div>
      </Box>
    </>
  );

}

export default Education;




