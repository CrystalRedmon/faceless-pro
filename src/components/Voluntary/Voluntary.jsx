// import React, { Component } from 'react';
// import { useHistory } from 'react-router-dom';

// class Voluntary extends Component {
//   state = { showForm: false }

//   submit = (e) => {
//     e.preventDefault();
//     const history = useHistory();
//     history.push('/CandidatePage');
//   }

//   showForm = () => {
//     return (
//       <div>
//         <form id="add-app">
//           <label>Application Name : </label>
//           <input type="text" />
//           <br />
//           <label> id : </label>
//           <input type="text" />
//           <br />
//           <label>Server details : </label>
//           <input />
//           <br />
//           <button>Create</button>
//         </form>
//       </div>
//     );
//   }

//   render() {
//     return (
//       <div className="manage-app">
//         {/* <h1>Manage Application</h1>
//         <button onClick={() => this.setState({ showForm: true })}>Add New Application</button>
//         <button>Change Existing Application</button>
//         <button>Remove Application</button> */}
//         <button onClick={this.submit}>View Profile</button>
//         {/* {this.state.showForm ? this.showForm() : null} */}
//       </div>
//     );
//   }
// }

// export default Voluntary;


import { useTheme } from '@emotion/react';
import React, { Component } from 'react';
import { useHistory } from 'react-router-dom';
function Voluntary(){
    const history = useHistory();

    const submit = (e) => {
        e.preventDefault();
        console.log('in view profile');
        history.push('/CandidatePage');
    };
    
    return(

        <>

        <button onClick={submit}>View Profile</button>
        </>
    )
}

export default Voluntary;