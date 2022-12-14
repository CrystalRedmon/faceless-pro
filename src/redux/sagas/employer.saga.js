import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* addEmployerInfo(action) {
    console.log('in addEmployerInfo with action.payload', action.payload);
    // not currently linked with route yet

}

function* employerSaga() {
    yield takeLatest('ADD_EMPLOYER_INFO', addEmployerInfo);
}

export default employerSaga