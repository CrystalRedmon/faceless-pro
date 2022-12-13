import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

function Experience() {
  const [experience, setExperience] = useState('');
  const dispatch = useDispatch();
  const history = useHistory();

  const getExperience = (evt) => {
    evt.preventDefault();
    console.log('inside Experience', experience)
    // dispatch({
    //     type: 'GET_EXPERIENCE',
    //     payload: experience
    // })
    history.push('/Skills');
  }

  class MyForm extends React.Component {
    state = {
      isFormOpen: false
    };

    handleFormOpen = () => {
      this.setState({ isFormOpen: true });
    }

    render() {
      return (
        <div>
          <h1>INSIDE EXPERIENCE</h1>
          {
            this.state.isFormOpen
              ? (
                <form>
                  <input type='text' placeholder='Company'></input>
                  <input type='text' placeholder='Job Title'></input>
                  <input type='text' placeholder='Dates Worked'></input>
                  <input type='text' placeholder='Job Duties'></input>

                </form>
              )
              : <button onClick={this.handleFormOpen}>+ Add Experience</button>
          }
          <button onClick={getExperience}>Save and Continue</button>
        </div>

      );
    }
  }

  return <MyForm />;
}

export default Experience;