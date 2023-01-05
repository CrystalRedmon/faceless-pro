const editCandidate = (state = {}, action) => {
    switch (action.type) {
        case 'SET_EDIT_CANDIDATE':
            return action.payload;
        case 'UPDATE_EDIT_CANDIDATE':
            return {
                ...state,
                ...action.payload
            };
    };

    return state;
}

export default editCandidate;