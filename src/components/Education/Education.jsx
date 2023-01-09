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
  return (
    <>
    <CandidateBreadcrumb />
    <Typography variant="h6" style={{ textAlign: "center" }}> Add Education below: This will not shared with employer</Typography>
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="Education">
      <form onSubmit={submit}>
        {formFields.map((form, index) => {
          return (
            <div key={index} style={{ display: 'flex', flexDirection: 'column' }}>
              <FormControl>
                <InputLabel htmlFor="school-name">School Name</InputLabel>
                <Input
                  id="school-name"
                  name='School'
                  onChange={event => handleFormChange(event, index)}
                  value={form.School}
                />
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="major">Qualifications</InputLabel>
                <Input
                  id="major"
                  name='Major'
                  onChange={event => handleFormChange(event, index)}
                  value={form.Major}
                />
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="dates">Dates Attended</InputLabel>
                <Input
                  id="dates"
                  name='Dates'
                  onChange={event => handleFormChange(event, index)}
                  value={form.Dates}
                />
              </FormControl>
              <FormControl>
                <InputLabel htmlFor="notes">Notes</InputLabel>
                <Input
                  id="notes"
                  name='Notes'
                  onChange={event => handleFormChange(event, index)}
                  value={form.Notes}
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




