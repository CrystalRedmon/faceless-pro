import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addEmployerInfo(action) {
    console.log('in addEmployerInfo with action.payload', action.payload);
    try {
        yield axios.post('/api/employerProfile', action.payload);

    } catch (error) {
        console.log('error in adding to employer table', error);
    }
}

function* employerSaga() {
    yield takeLatest('ADD_EMPLOYER_INFO', addEmployerInfo);
}

export default employerSaga