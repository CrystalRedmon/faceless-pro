import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';

function EditEducation () {
  const education = useSelector(store => store.education);
  console.log('education object:', education);
  const dispatch = useDispatch();

  const [formFields, setFormFields] = useState({
    School: education.School,
    Major: education.Major,
    Dates: education.Dates,
    Notes: education.Notes
  });

  const handleFormChange = (event) => {
    console.log('in handleformChange')
    // setFormFields({
    //   ...formFields,
    //   [event.target.name]: event.target.value
    // });
  }

  const submit = (e) => {
    e.preventDefault();
    console.log('Formfield info is here', formFields);

    dispatch({
      type: 'EDIT_EDUCATION',
      payload: formFields
    });
  };
  return (
    <div className="Education">
      <form onSubmit={submit}>
        <FormControl>
          <InputLabel htmlFor="school-name">School Name</InputLabel>
          <Input
            id="school-name"
            name='School'
            onChange={handleFormChange}
            value={formFields.School}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="major">Major</InputLabel>
          <Input
            id="major"
            name='Major'
            onChange={handleFormChange}
            value={formFields.Major}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="dates">Dates Attended</InputLabel>
          <Input
            id="dates"
            name='Dates'
            onChange={handleFormChange}
            value={formFields.Dates}
          />
        </FormControl>
        <FormControl>
          <InputLabel htmlFor="notes">Notes</InputLabel>
          <Input
            id="notes"
            name='Notes'
            onChange={handleFormChange}
            value={formFields.Notes}
          />
        </FormControl>
        <br />
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </form>
    </div>
  )
}

export default EditEducation;
