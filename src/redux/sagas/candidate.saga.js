import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* CHANGEME() {
    // do stuff
    console.log('hi');
}

function* candidateSaga() {
    yield takeLatest('DO_STUFF', CHANGEME);
}

export default candidateSaga