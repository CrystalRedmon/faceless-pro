const skills = (state = [], action) => {
    if (action.type === 'ADD_SKILLS') {
        return action.payload
    }
    return state;
  }


  export default skills;