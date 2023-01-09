import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { Typography } from '@mui/material';
import CandidateBreadcrumb from '../Breadcrumbs/Breadcrumbs';

function CandidateHyperLink() {
  const history = useHistory();
  const dispatch = useDispatch();

  const [formFields, setFormFields] = useState([
    { Hyperlink: '' },
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
        type: 'ADD_HYPERLINK',
        payload: {
          Hyperlink: form.Hyperlink,
        },
      });
    });
    history.push('/user');
  };

  const addFields = () => {
    let object = {
      Hyperlink: '',
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
    <div className="Hyperlink" style={{
      display: 'flex', flexDirection: 'column',
      alignItems: 'center', justifyContent: 'center'
    }}>
      <Typography variant="h6">Add an optional portfolio to your profile by providing the hyperlink below:This will be shared with employer</Typography>
      <form onSubmit={submit}>
        {formFields.map((form, index) => {
          return (
            <div key={index}>
              <TextField
                label="Hyperlink"
                name="Hyperlink"
                placeholder="Add Hyperlink"
                onChange={event => handleFormChange(event, index)}
                value={form.Hyperlink}
              />
              <Button onClick={() => removeFields(index)}>Remove</Button>
              <Button onClick={addFields}>Add More..</Button>
              <br />
              <br />
              <Button variant="contained" color="primary" onClick={submit}>Submit Profile</Button>
            </div>
          );
        })}
      </form>
    </div>
    </>
  );
  
  
  
  
}



export default CandidateHyperLink;