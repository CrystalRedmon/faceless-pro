const experience = (state = [], action) => {
    if (action.type === 'GET_EXPERIENCE') {
        return action.payload
    }
    return state;
  }


  export default experience;