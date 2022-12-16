
import "./Skills.css";
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';


function Skills() {
  const [serviceList, setServiceList] = useState([{ service: "" }]);

  const getSkills = (evt) => {
    evt.preventDefault();
    console.log('inside skills', serviceList)
    dispatch({
        type: 'GET_SKILLS',
        payload: serviceList
    })
    history.push('/VoluntaryIdentification');
}


  const handleServiceChange = (e, index) => {
    const { name, value } = e.target;
    const list = [...serviceList];
    list[index][name] = value;
    setServiceList(list);
  };


  const handleServiceRemove = (index) => {
    const list = [...serviceList];
    list.splice(index, 1);
    setServiceList(list);
  };

  const handleServiceAdd = () => {
    setServiceList([...serviceList, { service: "" }]);
  };

  return (
    <form className="App" autoComplete="off">
      <div className="form-field">
        <label htmlFor="service"> Add Skills </label>
        {serviceList.map((singleService, index) => (
          <div key={index} className="services">
            <div className="first-division">
              <input
                name="service"
                type="text"
                id="service"
                value={singleService.service}
                onChange={(e) => handleServiceChange(e, index)}
                required
              />
              {serviceList.length - 1 === index && serviceList.length < 4 && (
                <button
                  type="button"
                  onClick={handleServiceAdd}
                  className="add-btn"
                >
                  <span>Add a Skill</span>
                </button>
              )}
            </div>
            <div className="second-division">
              {serviceList.length !== 1 && (
                <button
                  type="button"
                  onClick={() => handleServiceRemove(index)}
                  className="remove-btn"
                >
                  <span>Remove</span>
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="output">
        <h2>Skills</h2>
        {serviceList &&
          serviceList.map((singleService, index) => (
            <ul key={index}>
              {singleService.service && <li>{singleService.service}</li>}
            </ul>
          ))}
      </div>
    </form>
  );
}

export default Skills;
// import React, { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { useHistory } from 'react-router-dom';
// import { useEffect } from 'react';
// import {useSelector} from 'react-redux';


// function Skills() {
//     const [skills, setSkills] = useState('');
//     const dispatch = useDispatch();
//     const history = useHistory();

//     const getSkills = (evt) => {
//         evt.preventDefault();
//         console.log('inside Skills', skills)
//         // dispatch({
//         //     type: 'GET_SKILLS',
//         //     payload: skills
//         // })
//         history.push('/VoluntaryIdentification');
//     }
//   class MyForm extends React.Component {
//     state = {
//       isFormOpen: false
//     };

//     handleFormOpen = () => {
//       this.setState({ isFormOpen: true });
//     }

//     render() {
//       return (
//         <div>
//             <h1>INSIDE SKILLS</h1>
//           {
//             this.state.isFormOpen
//               ? <form>
//                 <input type='text'
//               placeholder='Insert Skills'
              
//               >
//               </input>
//               </form>
//               : <button onClick={this.handleFormOpen}>+ Add Skills</button>
//           }

//         <button onClick={getSkills}> Save and Continue </button>
//         </div>

//       );
//     }
//   }


//   return <MyForm />;
// }

// export default Skills;