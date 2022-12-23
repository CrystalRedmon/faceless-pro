import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


function Experience() {
  const history = useHistory();
  const dispatch = useDispatch();


  const [formFields, setFormFields] = useState([
    { Company: '', Title: '' , Dates:'',JobDuty: ''},
  ])

  const handleFormChange = (event, index) => {
    let data = [...formFields];
    data[index][event.target.name] = event.target.value;
    setFormFields(data);
    // setFormFields(JSON.stringify(data));
  }

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
  };

  const addFields = () => {
    let object = {
      Company: '',
      Title: '',
      Dates: '',
      JobDuty: ''
    }

    setFormFields([...formFields, object])
  }

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1)
    setFormFields(data)
  }

  return (
    <div className="Education">
      <form onSubmit={submit}>
        {formFields.map((form, index) => {
          return (
            <div key={index}>
              <input
                name='Company'
                placeholder='Company Name'
                onChange={event => handleFormChange(event, index)}
                value={form.Company}
              />
              <input
                name='Title'
                placeholder='Title'
                onChange={event => handleFormChange(event, index)}
                value={form.Title}
              />
              <input
                name='Dates'
                placeholder='Dates'
                onChange={event => handleFormChange(event, index)}
                value={form.Dates}
              />
              <input
                name='JobDuty'
                placeholder='Job Duty'
                onChange={event => handleFormChange(event, index)}
                value={form.JobDuty}
              />
              <button onClick={() => removeFields(index)}>Remove</button>
            </div>
          )
        })}
      </form>
      <button onClick={addFields}>Add More..</button>
      <br />
      <button onClick={submit}>Submit</button>
    </div>
  );
}


export default Experience;