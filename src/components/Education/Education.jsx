import React, { useState, useEffect  } from 'react';
import { useDispatch, useSelector  } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import { Typography } from '@mui/material';
import CandidateBreadcrumb from '../Breadcrumbs/Breadcrumbs';

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
      form.schoolName.value = "Prime Digital Academy";
      form.major.value = "Full Stack Engineer Certificate";
      form.dates.value = "8/2022 - 1/2023";
      form.notes.value = "An accelerated full stack program covering technologies including JavaScript, React, Node.js, and Express";

      console.log('This is the formData', formFields);

      setFormFields([

        {
          School: "Prime Digital Academy",
          Major: "Full Stack Engineer Certificate",
          Dates: "8/2022 - 1/2023",
          Notes: "An accelerated full stack program covering technologies including JavaScript, React, Node.js, and Express"

        }])



    })
  };


  let value;









  return (
    <>
    <CandidateBreadcrumb />
    <Typography onClick={handleFormCompletion} id='populateCandidateEducation' variant="h6" style={{ textAlign: "center" }}> Add Education below: This will not shared with employer</Typography>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="Education">
      <form id="candidateEducation" onSubmit={submit}>
        {formFields.map((form, index) => {
          return (
            <div key={index} style={{ display: 'flex', flexDirection: 'column' }}>

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
              <br />
              <Button onClick={() => removeFields(index)}>Remove</Button>
              <br />
              <Button onClick={addFields}>Add More..</Button>
              <br />
              <Button variant="contained" color="primary" onClick={submit}>Next</Button>
            </div>
          )
        })}
      </form>
      <br />
    </div>
    </>
  );
  
}

export default Education;




