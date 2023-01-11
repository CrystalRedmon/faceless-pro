import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { Typography, InputLabel, Box } from '@mui/material';

function Experience() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [formFields, setFormFields] = useState([
    { Company: '', Title: '', Dates: '', JobDuty: '' },
  ]);

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  };

  const submit = (e) => {
    e.preventDefault();

    formFields.forEach((form) => {
      dispatch({
        type: 'ADD_EXPERIENCE',
        payload: {
          Company: form.Company,
          Title: form.Title,
          Dates: form.Dates,
          JobDuty: form.JobDuty,
        },
      });
    });
    history.push('/skills')
  };

  const addFields = () => {
    let object = {
      Company: '',
      Title: '',
      Dates: '',
      JobDuty: '',
    };

    setFormFields([...formFields, object]);
  };

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1);
    setFormFields(data);
  };


  let value;


  return (
    <>
      {/* <CandidateBreadcrumb /> */}
      <Box className='container'>

        <Typography  id='populateCandidateExperience' variant="h3" style={{ marginTop: '1em' }}>Experience </Typography>
        <Typography variant="h6" style={{ marginTop: '2em', marginBottom: '2em' }}>This information will be shared with employers as part of your application.</Typography>
        <Typography>Step 4 of 6</Typography>

        <div sx={{ marginTop: '5em' }} >
          <form style={{ marginTop: '2em' }} id='candidateExperience' onSubmit={submit}>
            {formFields.map((form, index) => {
              return (
                <div key={index}>
                  <InputLabel>Company</InputLabel>
                  <TextField
                    id='company'
                    className='textField'
                    style={{ width: '30em', marginBottom: '2em' }}
                    name="Company"
                    onChange={event => handleFormChange(event, index)}
                    value={value}
                  />
                  <br />
                  <InputLabel>Title</InputLabel>
                  <TextField
                    id='title'
                    className='textField'
                    style={{ width: '30em', marginBottom: '2em' }}
                    name="Title"
                    onChange={event => handleFormChange(event, index)}
                    value={value}
                  />
                  <br />
                  <InputLabel>Dates</InputLabel>
                  <TextField
                    id='dates'
                    className='textField'
                    style={{ width: '30em', marginBottom: '2em' }}
                    name="Dates"
                    onChange={event => handleFormChange(event, index)}
                    value={value}
                  />
                  <br />
                  <InputLabel>Job Duties</InputLabel>
                  <TextareaAutosize
                    id='jobDuty'
                    minRows={10}
                    className='textField'
                    style={{ width: '35em', marginBottom: '2em' }}
                    name="JobDuty"
                    onChange={event => handleFormChange(event, index)}
                    value={value}
                    maxRows={20}
                  />
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3em', width: '25%' }}>
                    <Button sx={{ marginRight: '10em', }} variant="contained" color="error" className='formButtons' onClick={() => removeFields(index)}>Remove</Button>
                    <Button sx={{ marginRight: '10em', }} variant="contained" color="error" className='formButtons' onClick={addFields}>add more</Button>
                  </Box>


                  <Button className='formButtons' variant="contained" color="primary" onClick={submit}>Next</Button>
                </div>
              );
            })}
          </form>
        </div>

      </Box>
    </>
  );

}

export default Experience;