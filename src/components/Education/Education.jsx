import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';

function Education() {
  const history = useHistory();
  const dispatch = useDispatch();


  const editedEducation = useSelector(store => store.candidateReducer.editEducation);
  const info = useSelector(store => store.candidateReducer.candidateInfo);
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
    console.log('Formfield info is here', formFields);

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

  const handleFormCompletion = () => {

    let button = document.getElementById('populateCandidateEducation');
    let form = document.getElementById('candidateEducation');

    button.addEventListener('click', function () {
      // Set the value of the form fields
      form.schoolName.value = "This is My School";
      form.major.value = "It's my Major";
      form.dates.value = "these are my school dates";
      form.notes.value = "These are additional notes";

      console.log('This is the formData', formFields);

      setFormFields([
        ...formFields,
        {
          School: "This is My School",
          Major: "It's my Major",
          Dates: "these are my school dates",

        }])



    })
  };


  let value;

  return (
    <div style={{ display: 'flex', justifyContent: 'center' }} className="Education">
      <form onSubmit={submit} id='candidateEducation'>
        {formFields.map((form, index) => {
          return (

            <div key={index}>
              <div sx={{ width: '5em', height: '5em' }} onClick={handleFormCompletion} id='populateCandidateEducation'>here it is</div>
              <InputLabel htmlFor="schoolName">School Name</InputLabel>
              <FormControl>

                <Input
                  id="schoolName"
                  name='School'
                  onChange={event => handleFormChange(event, index)}
                  value={value}
                />
              </FormControl>
              <InputLabel htmlFor="major">Qualifications</InputLabel>
              <FormControl>
                <Input
                  id="major"
                  name='Major'
                  onChange={event => handleFormChange(event, index)}
                  value={value}
                />
              </FormControl>
              <InputLabel htmlFor="dates">Dates Attended</InputLabel>
              <FormControl>
                <Input
                  id="dates"
                  name='Dates'
                  onChange={event => handleFormChange(event, index)}
                  value={value}
                />
              </FormControl>
              <InputLabel htmlFor="notes">Notes</InputLabel>
              <FormControl>

                <Input
                  id="notes"
                  name='Notes'
                  onChange={event => handleFormChange(event, index)}
                  value={value}
                />
              </FormControl>
              <Button onClick={() => removeFields(index)}>Remove</Button>
            </div>
          )
        })}
      </form>
      <Button onClick={addFields}>Add More..</Button>
      <br />
      <Button variant="contained" color="primary" onClick={submit}>Next</Button>
    </div>
  );
}

export default Education;




