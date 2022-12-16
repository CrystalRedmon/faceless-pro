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

function* saveJobs(action){
    console.log("action.payload is",action.payload);
    try{
        const savedJob = yield axios.post(`/api/candidateProfile/${action.payload.id}`);
        console.log('Save recent jobs POST successful: ', savedJob.data)
        yield put({type: 'FETCH_SAVE_JOBS', payload: savedJob.data })
    }
    catch(err) {
        console.error('GET saved jobs failed: ', err);
    }

}

function* searchJobs(action){
    console.log(action.payload);
    try{
        const keywordSearch = yield axios.get(`/api/candidateProfile/${action.payload}`);
        console.log('keyword search GET successful: ', keywordSearch.data)
        yield put({type: 'SET_SEARCHED_JOBS', payload: keywordSearch.data })
    }
    catch(err) {
        console.error('GET search jobs failed: ', err);
    }
}
function* candidateSaga() {
    yield takeLatest('FETCH_RECENT_JOBS', fetchRecentJobs);
    yield takeLatest('SAVE_JOBS', saveJobs);
    yield takeLatest('FETCH_SEARCHED_JOBS', searchJobs);


}

export default candidateSaga