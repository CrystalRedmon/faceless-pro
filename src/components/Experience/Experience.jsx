import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

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
    console.log('Formfield info is here', formFields);

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

  return (
    <div className="Education">
      <form onSubmit={submit}>
        {formFields.map((form, index) => {
          return (
            <div key={index}>
              <TextField
                label="Company"
                name="Company"
                placeholder="Company Name"
                onChange={event => handleFormChange(event, index)}
                value={form.Company}
              />
              <TextField
                label="Title"
                name="Title"
                placeholder="Title"
                onChange={event => handleFormChange(event, index)}
                value={form.Title}
              />
              <TextField
                label="Dates"
                name="Dates"
                placeholder="Dates"
                onChange={event => handleFormChange(event, index)}
                value={form.Dates}
              />
              <TextField
                label="Job Duty"
                name="JobDuty"
                placeholder="Job Duty"
                onChange={event => handleFormChange(event, index)}
                value={form.JobDuty}
              />
              <Button onClick={() => removeFields(index)}>Remove</Button>
            </div>
          );
        })}
      </form>
      <Button onClick={addFields}>Add More..</Button>
      <br />
      <Button variant="contained" color="primary" onClick={submit}>Submit</Button>
      </div>
);
}

export default Experience;