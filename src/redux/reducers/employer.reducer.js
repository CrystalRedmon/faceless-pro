const editEmployer = (state = {}, action) => {
    switch (action.type) {
        case 'SET_EDIT_EMPLOYER':
            return action.payload;
        case 'UPDATE_EDIT_EMPLOYER':
            return {
                ...state,
                ...action.payload
            };
    };

    return state;
}

export default editEmployer;