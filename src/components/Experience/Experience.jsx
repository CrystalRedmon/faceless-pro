import React from 'react';

function Experience() {
    
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
          {
            this.state.isFormOpen
              ? <form>
                <input type='text'
              placeholder='Company'
              
              ></input>
                <input type='text'
              placeholder='Job Title'
              
              ></input>
                <input type='Dates'
              placeholder='Dates Worked'
              
              ></input>
                <input type='text'
              placeholder='Job Duties'
              
              ></input>
             
              </form>
              : <button onClick={this.handleFormOpen}>+ Add Experience</button>
          }

        <button> Save and Continue </button>
        </div>

      );
    }
  }


  return <MyForm />;
}

export default Experience;
