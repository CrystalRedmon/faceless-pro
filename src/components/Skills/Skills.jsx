import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';


function Skills() {
  const history = useHistory();
  const dispatch = useDispatch();


  const [formFields, setFormFields] = useState([
    { Skill:''}
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
        type: 'ADD_SKILL',
        payload: {
          Skill: form.Skill,
        },
      });
    });
  };

  const addFields = () => {
    let object = {
      Skill: ''
    }

    setFormFields([...formFields, object])
  }

  const removeFields = (index) => {
    let data = [...formFields];
    data.splice(index, 1)
    setFormFields(data)
  }

  return (
    <div className="Skill">
      <form onSubmit={submit}>
        {formFields.map((form, index) => {
          return (
            <div key={index}>
              <input
                name='Skill'
                placeholder='Add Skill'
                onChange={event => handleFormChange(event, index)}
                value={form.School}
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


export default Skills;