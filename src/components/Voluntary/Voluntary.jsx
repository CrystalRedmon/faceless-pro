import React, { Component } from 'react';

class Voluntary extends Component{
state= {showForm: false}

showForm = () => {
   return (
     <div> 
    <form id= "add-app">

         <label>Application Name : </label>
         <input type="text"> </input>

         <label> id : </label>
         <input type="text" ></input>

         <label>Server details : </label>
         <input ></input>

         <button>Create</button>
      </form>
      </div>
     );
 }

render(){
    return (
        <div className='manage-app'>
        <h1>Manage Application</h1>
        <button  onClick={() => this.setState({showForm: true}) }>Add New Application</button>
        <button>Change Existing Application</button>
        <button>Remove Application</button>
        {this.state.showForm ? this.showForm() : null}
        </div>
    );
}

}
export default Voluntary;