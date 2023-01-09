import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { Button, InputLabel, Box, Grid } from '@material-ui/core';


function Skills() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [formFields, setFormFields] = useState([
    { Skill: '' },
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
        type: 'ADD_SKILL',
        payload: {
          Skill: form.Skill,
        },
      });
    });
    history.push('/hyperlink');
  };

  const addFields = () => {
    let object = {
      Skill: '',
    };

    setFormFields([...formFields, object]);
  };

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1);
    setFormFields(data);
  };


  const handleFormCompletion = () => {

    let button = document.getElementById('populateCandidateSkills');
    let form = document.getElementById('candidateSkills');

    button.addEventListener('click', function () {
      // Set the value of the form fields
      form.skill.value = "All of my Skills";

      console.log('This is the formData', formFields);

      setFormFields([

        {
          Skill: "All of my Skills",

        }])



    })
  };


  let value;





  return (<>
    <Grid container spacing={2}>
      {/* <div className="Skill" style={{ display: 'flex', justifyContent: 'center' }}> */}
      <Grid item xs={12}>
        <Box sx={{ width: '50%', margin: 'auto' }}>
          <h1 onClick={handleFormCompletion} id='populateCandidateSkills'>Add Skills</h1>
          <h2>Step 5 of 6</h2>
        </Box>
      </Grid>
      <Grid item xs={4}></Grid>
      <Grid item xs={8}>

        <form id="candidateSkills" onSubmit={submit}>
          {formFields.map((form, index) => {
            return (
              <div key={index}>
                <div>

                </div>
                <InputLabel htmlFor="skill">Skills</InputLabel>
                <TextField
                  id="skill"
                  name="Skill"
                  onChange={event => handleFormChange(event, index)}
                  value={value}
                />
                <Button onClick={() => removeFields(index)}>Remove</Button>
              </div>
            );
          })}
        </form>
      </Grid>
      <Grid item xs={11}>
        <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '5em' }}>
          <Button variant="contained" color="primary" onClick={addFields} sx={{marginRight: '3em'}}>Add More..</Button>
          <Button variant="contained" color="primary" onClick={submit}>Next</Button>
        </Box>
      </Grid>
      {/* </div> */}
    </Grid>
  </>);
}

export default Skills;
