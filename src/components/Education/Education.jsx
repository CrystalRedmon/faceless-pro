import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import './Education.css';

function Education() {
  const history = useHistory();
  const dispatch = useDispatch();


  const [formFields, setFormFields] = useState([
    { School: '', Major: '' , Dates:'',Notes: ''},
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
    <div className="Education">
      <form onSubmit={submit}>
        {formFields.map((form, index) => {
          return (
            <div key={index}>
              <input
                name='School'
                placeholder='School Name'
                onChange={event => handleFormChange(event, index)}
                value={form.School}
              />
              <input
                name='Major'
                placeholder='Major'
                onChange={event => handleFormChange(event, index)}
                value={form.Major}
              />
              <input
                name='Dates'
                placeholder='Dates Attended'
                onChange={event => handleFormChange(event, index)}
                value={form.Dates}
              />
              <input
                name='Notes'
                placeholder='Notes'
                onChange={event => handleFormChange(event, index)}
                value={form.Notes}
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


export default Education;