const skills = (state = [], action) => {
    if (action.type === 'GET_SKILLS') {
        return action.payload
    }
    return state;
}

export default skills;