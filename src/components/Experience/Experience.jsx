import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { Typography } from '@mui/material';
import CandidateBreadcrumb from '../Breadcrumbs/Breadcrumbs';


const useStyles = makeStyles((theme) => ({
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  input: {
    marginBottom: theme.spacing(2),
  },
}));

function Experience() {
  const classes = useStyles();
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
    <>
     <CandidateBreadcrumb />
      <div className={classes.form}>
      <Typography variant="h6">Add Job Experience below:This will be shared with employer</Typography>
        <form onSubmit={submit}>
          {formFields.map((form, index) => {
            return (
              <div key={index}>
                <TextField
                  className={classes.input}
                  label="Company"
                  name="Company"
                  placeholder="Company Name"
                  onChange={event => handleFormChange(event, index)}
                  value={form.Company}
                />
                <br />
                <TextField
                  className={classes.input}
                  label="Title"
                  name="Title"
                  placeholder="Title"
                  onChange={event => handleFormChange(event, index)}
                  value={form.Title}
                />
                <br />
                <TextField
                  className={classes.input}
                  label="Dates"
                  name="Dates"
                  placeholder="Dates"
                  onChange={event => handleFormChange(event, index)}
                  value={form.Dates}
                />
                <br />
                <TextField
                  className={classes.input}
                  label="Job Duty"
                  name="JobDuty"
                  placeholder="Job Duty"
                  onChange={event => handleFormChange(event, index)}
                  value={form.JobDuty}
                  multiline
                  rows={10}
                  maxRows={20}
                />
                <br />
                <Button onClick={() => removeFields(index)}>Remove</Button>
                <br />
                <Button onClick={addFields}>Add More..</Button>
                <br />
                <Button variant="contained" color="primary" onClick={submit}>Next</Button>
              </div>
            );
          })}
        </form>
      </div>
    </>
  );

}

export default Experience;