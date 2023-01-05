const experience = (state = [], action) => {
    if (action.type === 'ADD_EXPERIENCE') {
        return action.payload
    }
    return state;
  }


  export default experience;