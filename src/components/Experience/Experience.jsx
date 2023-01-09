import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import { Button, Box } from '@material-ui/core';
import { InputLabel } from '@material-ui/core';

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


  const handleFormCompletion = () => {

    let button = document.getElementById('populateCandidateExperience');
    let form = document.getElementById('candidateExperience');

    button.addEventListener('click', function () {
      // Set the value of the form fields
      form.company.value = "Starbucks";
      form.title.value = "Barista";
      form.dates.value = "3/2019- 7/2022";
      form.jobDuty.value = "Promotes coffee consumption by educating customers; selling coffee and coffee grinding and brewing equipment, accessories, and supplies; preparing and serving a variety of coffee drinks, along with pastries and cookies." + '\n' +'\n' +
      "Welcomes customers by determining their coffee interests and needs."+ '\n' + '\n' +
      "Educates customers by presenting and explaining the coffee drink menu; answering questions.";

      console.log('This is the formData', formFields);

      setFormFields([

        {
          Company: "Starbucks",
          Title: "Barista",
          Dates: "3/2019- 7/2022",
          JobDuty: "Promotes coffee consumption by educating customers; selling coffee and coffee grinding and brewing equipment, accessories, and supplies; preparing and serving a variety of coffee drinks, along with pastries and cookies." + '\n' +'\n' +
          "Welcomes customers by determining their coffee interests and needs."+ '\n' + '\n' +
          "Educates customers by presenting and explaining the coffee drink menu; answering questions."
        }
      ])

    })
  };

  let value;
  return (
    <>
      <div className="Education" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <form id='candidateExperience' onSubmit={submit}>
          {formFields.map((form, index) => {
            return (
              <div key={index}>
                <div>
                  <h1 onClick={handleFormCompletion} id='populateCandidateExperience'>Add Experience</h1>
                  <h2>Step 4 of 6</h2>
                </div>
                <InputLabel htmlFor="company">Company Name</InputLabel>
                <TextField
                  id='company'
                  name="Company"
                  onChange={event => handleFormChange(event, index)}
                  value={value}
                />
                <InputLabel htmlFor="title">Title</InputLabel>
                <TextField
                  id="title"
                  name="Title"
                  onChange={event => handleFormChange(event, index)}
                  value={value}
                />
                <InputLabel htmlFor="dates">Dates</InputLabel>
                <TextField
                  id="dates"
                  name="Dates"
                  onChange={event => handleFormChange(event, index)}
                  value={value}
                />
                <InputLabel htmlFor="jobduty">Job Duties</InputLabel>
                <TextField
                  id="jobDuty"
                  name="JobDuty"
                  onChange={event => handleFormChange(event, index)}
                  value={value}
                />
                <Button variant="contained" color="primary" onClick={() => removeFields(index)}>Remove</Button>
              </div>

            );
          })}
        </form>

        <br />

      </div>

      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '5em' }}>

        <Button variant="contained" color="primary" onClick={addFields}>Add More..</Button>
        <Button variant="contained" color="primary" onClick={submit}>Next</Button>
      </Box>


    </>);
}

export default Experience;