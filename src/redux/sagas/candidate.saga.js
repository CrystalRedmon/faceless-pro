import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchRecentJobs(){
    try{
        const recentJobs = yield axios.get(`/api/candidateProfile`);
        console.log('Recent jobs GET successful: ', recentJobs.data)
        yield put({type: 'SET_RECENT_JOBS', payload: recentJobs.data })
    }
    catch(err) {
        console.error('GET recent jobs failed: ', err);
    }
}

function* candidateSaga() {
    yield takeLatest('FETCH_RECENT_JOBS', fetchRecentJobs);
}

export default candidateSaga