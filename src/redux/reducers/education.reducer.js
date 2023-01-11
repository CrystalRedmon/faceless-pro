const education = (state = [], action) => {
    if (action.type === 'GET_EDUCATION') {
        return action.payload
    }
    return state;
}


export default education;