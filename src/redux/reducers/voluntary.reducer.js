const voluntary = (state = [], action) => {
    if (action.type === 'GET_VOLUNTARY') {
        return action.payload
    }
    return state;
  }


  export default voluntary;