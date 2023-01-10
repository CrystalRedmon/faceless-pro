import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { InputLabel, Typography, Box } from '@mui/material';
import CandidateBreadcrumb from '../Breadcrumbs/Breadcrumbs';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

function CandidateHyperLink() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [formFields, setFormFields] = useState([
    { Hyperlink: '' },
  ]);

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
  };

  const submit = (e) => {
    e.preventDefault();
    console.log('Formfield info is here', formFields);

    formFields.forEach((form) => {
      dispatch({
        type: 'ADD_HYPERLINK',
        payload: {
          Hyperlink: form.Hyperlink,
        },
      });
    });
    history.push('/user');
  };

  const addFields = () => {
    let object = {
      Hyperlink: '',
    };

    setFormFields([...formFields, object]);
  };

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1);
    setFormFields(data);
  };

  const handleFormCompletion = () => {

    let button = document.getElementById('populateCandidateHyperlink');
    let form = document.getElementById('candidateHyperlink');

    button.addEventListener('click', function () {
      // Set the value of the form fields
      form.hyperlink.value = "github.com/coffeecoder";

      console.log('This is the formData', formFields);

      setFormFields([
        {
          Skill: "github.com/fsiyad",
        }])

    })
  };


  let value;






  return (
    <>
      {/* <CandidateBreadcrumb /> */}
      <Box className='container'>
      <div className="Hyperlink" style={{
        }}>
        <Typography style={{ marginTop: '1em' }} onClick={handleFormCompletion} id='populateCandidateHyperlink' variant="h3">Portfolio | External Links</Typography>
          <Typography variant='h6' style={{ marginTop: '2em', marginBottom: '2em' }}>This information will be shared with employers as part of your application.</Typography>
        <Typography>Step 6 of 6</Typography>

        <Box sx={{ marginTop: '5em' }}>
          <form id='candidateHyperlink' onSubmit={submit}>
            {formFields.map((form, index) => {
              return (
                <div key={index}>
                  <TextField
                    className='textField'
                    style={{ width: '20em', marginBottom: '2em', marginRight: '2em' }}
                    id='hyperlink'
                    name="Hyperlink"
                    onChange={event => handleFormChange(event, index)}
                    value={value}
                  />
                  <IconButton onClick={() => removeFields(index)}><DeleteIcon /></IconButton>
                </div>
              );
            })}
          </form>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', marginBottom: '3em', width: '25%' }}>
            <Button variant="contained" color="error" onClick={addFields}>add more</Button>
            <Button className='formButtons' variant="contained" color="primary" onClick={submit}>Next</Button>
          </Box>
        </Box>
      </div>
      </Box>
    </>
  );




}



export default CandidateHyperLink;