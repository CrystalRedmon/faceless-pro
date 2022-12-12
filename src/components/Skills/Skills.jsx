
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import {useSelector} from 'react-redux';


function Skills() {
    const [skills, setSkills] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const getSkills = (evt) => {
        evt.preventDefault();
        console.log('inside Skills', skills)
        // dispatch({
        //     type: 'GET_SKILLS',
        //     payload: skills
        // })
        history.push('/VoluntaryIdentification');
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
            <h1>INSIDE SKILLS</h1>
          {
            this.state.isFormOpen
              ? <form>
                <input type='text'
              placeholder='Insert Skills'
              
              >
              </input>
              </form>
              : <button onClick={this.handleFormOpen}>+ Add Skills</button>
          }

        <button onClick={getSkills}> Save and Continue </button>
        </div>

      );
    }
  }


  return <MyForm />;
}

export default Skills;