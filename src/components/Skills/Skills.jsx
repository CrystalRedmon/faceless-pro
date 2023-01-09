import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Typography } from '@mui/material';
import CandidateBreadcrumb from '../Breadcrumbs/Breadcrumbs';


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
  return (
    <>
    <CandidateBreadcrumb />
    <div className="Skill" style={{
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center'
    }}>
      <Typography variant="h6">Add Skills below: This will be shared with employer</Typography>
      <form onSubmit={submit}>
        {formFields.map((form, index) => {
          return (
            <div key={index}>
              <TextField
                label="Skill"
                name="Skill"
                placeholder="Add Skill"
                onChange={event => handleFormChange(event, index)}
                value={form.Skill}
              />
              <Button onClick={() => removeFields(index)}>Remove</Button>
              <Button onClick={addFields}>Add More..</Button>
              <br />
              <br />
              <Button variant="contained" color="primary" onClick={submit}>Next</Button>
            </div>
          );
        })}
      </form>
      <div>
      </div>

    </div>
    </>

  );
}

export default Skills;
