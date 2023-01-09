import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { Typography, InputLabel } from '@mui/material';
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

  const handleFormCompletion = () => {

    let button = document.getElementById('populateCandidateExperience');
    let form = document.getElementById('candidateExperience');

    button.addEventListener('click', function () {
      // Set the value of the form fields
      form.company.value = "Starbucks";
      form.title.value = "Barista";
      form.dates.value = "3/2019- 7/2022";
      form.jobDuty.value = "Promotes coffee consumption by educating customers; selling coffee and coffee grinding and brewing equipment, accessories, and supplies; preparing and serving a variety of coffee drinks, along with pastries and cookies." + '\n' + '\n' +
        "Welcomes customers by determining their coffee interests and needs." + '\n' + '\n' +
        "Educates customers by presenting and explaining the coffee drink menu; answering questions.";

      console.log('This is the formData', formFields);

      setFormFields([

        {
          Company: "Starbucks",
          Title: "Barista",
          Dates: "3/2019- 7/2022",
          JobDuty: "Promotes coffee consumption by educating customers; selling coffee and coffee grinding and brewing equipment, accessories, and supplies; preparing and serving a variety of coffee drinks, along with pastries and cookies." + '\n' + '\n' +
            "Welcomes customers by determining their coffee interests and needs." + '\n' + '\n' +
            "Educates customers by presenting and explaining the coffee drink menu; answering questions."
        }
      ])

    })
  };

  let value;





  return (
    <>
      <CandidateBreadcrumb />
      <div className={classes.form}>
        <Typography onClick={handleFormCompletion} id='populateCandidateExperience' variant="h6">Add Job Experience below:This will be shared with employer</Typography>
        <form id='candidateExperience' onSubmit={submit}>
          {formFields.map((form, index) => {
            return (
              <div key={index}>
                <InputLabel>Company</InputLabel>
                <TextField
                  id='company'
                  className={classes.input}
                  name="Company"
                  onChange={event => handleFormChange(event, index)}
                  value={form.Company}
                />
                <br />
                <InputLabel>Title</InputLabel>
                <TextField
                  id='title'
                  className={classes.input}
                  name="Title"
                  onChange={event => handleFormChange(event, index)}
                  value={form.Title}
                />
                <br />
                <InputLabel>Dates</InputLabel>
                <TextField
                  id='dates'
                  className={classes.input}
                  name="Dates"
                  onChange={event => handleFormChange(event, index)}
                  value={form.Dates}
                />
                <br />
                <InputLabel>Job Duties</InputLabel>
                <TextField
                id='jobDuty'
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