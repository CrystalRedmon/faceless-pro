const education = (state = [], action) => {
    if (action.type === 'ADD_EDUCATION') {
        return action.payload
    }
    return state;
  }


  export default education;