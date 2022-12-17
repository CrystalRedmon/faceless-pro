import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addEmployerInfo(action) {
    console.log('in addEmployerInfo with action.payload', action.payload);
    try {
        yield axios.post('/api/employerProfile', action.payload);
        yield put({ type: 'FETCH_USER' });

    } catch (error) {
        console.log('error in adding to employer table', error);
    }
}

function* fetchEditEmployer() {

    try {
        const response = yield axios.get('/api/employerProfile');

        yield put({
            type: 'SET_EDIT_EMPLOYER',
            payload: response.data
        });
    }
    catch (err) {
        console.error(err);
    }
}

function* saveEmployerData(action) {

    const response = yield axios.put('/api/employerProfile', action.payload);

    console.log(response.data); // OK

    yield put({ type: 'FETCH_USER' });
}

function* employerSaga() {
    yield takeLatest('ADD_EMPLOYER_INFO', addEmployerInfo);
    yield takeLatest('FETCH_EDIT_EMPLOYER', fetchEditEmployer);
    yield takeLatest('SAVE_EMPLOYER_DATA', saveEmployerData);
}

export default employerSaga