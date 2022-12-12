import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import {useSelector} from 'react-redux';

function Education() {
    const [education, setEducation] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const getEducation = (evt) => {
        evt.preventDefault();
        console.log('inside Education', education)
        // dispatch({
        //     type: 'GET_EDUCATION',
        //     payload: education
        // })
        history.push('/Experience');
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
                <h1>INSIDE EDUCATION</h1>
          {
            this.state.isFormOpen
              ? (
                <form>
                  <input type='text' placeholder='Insert School'></input>
                  <input type='text' placeholder='Major/Concentration'></input>
                  <input type='text' placeholder='Dates Attended'></input>
                  <input type='text' placeholder='Major Projects/Courses'></input>

                </form>
              )
              : <button onClick={this.handleFormOpen}>+ Add Education</button>
          }
                <button onClick={getEducation}>Save and Continue</button>
        </div>

      );
    }
  }

  return <MyForm />;
}

export default Education;