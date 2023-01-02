const education = (state = [], action) => {
    if (action.type === 'SET_EDUCATION') {
        return action.payload
    }
    return state;
  }


  export default education;