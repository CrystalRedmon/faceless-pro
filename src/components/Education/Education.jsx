import React from 'react';

function Education() {
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
              placeholder='Select School'
              
              >
                <input type='text'
              placeholder='Select Major/Concentration'
              
              ></input>
              </input>
              </form>
              : <button onClick={this.handleFormOpen}>+ Add Education</button>
          }

        <button> Save and Continue </button>
        </div>

      );
    }
  }


  return <MyForm />;
}

export default Education;

