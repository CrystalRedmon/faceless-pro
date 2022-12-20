import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchRecentJobs(){
    try{
        const recentJobs = yield axios.get(`/api/candidateProfile`);
        console.log('Recent jobs GET successful: ', recentJobs.data)
        yield put({type: 'SET_JOBS', payload: recentJobs.data })
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
        yield put({type: 'SET_SAVED_JOBS', payload: savedJob.data })
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
        yield put({type: 'SET_JOBS', payload: keywordSearch.data })
    }
    catch(err) {
        console.error('GET search jobs failed: ', err);
    }
}

function* fetchSavedJobs(){
    console.log('action.payload for fetch saved jobs: ')
    try{
        const savedJobs = yield axios.get(`/api/candidateInfo`);
        console.log('saved jobs GET successful: ', savedJobs.data)
        yield put({type: 'SET_SAVED_JOBS', payload: savedJobs.data })
    }
    catch(err) {
        console.error('GET recent jobs failed: ', err);
    }
}
function* applyJob(action) {
console.log('action.payload for applied job: ', action.payload.id)
try{
    yield axios.post(`/api/candidateInfo/${action.payload.id}`)

    yield put({
        type: 'FETCH_SAVED_JOBS'
    })
}
catch( error ){
    console.log('error deleting request',error)
}
}

function* deleteJob(action) {
    console.log('delete action.payload: ', action.payload)
    try{
        yield axios.delete(`/api/candidateInfo/${action.payload.id}`)

        yield put({
            type: 'FETCH_SAVED_JOBS'
        })
    }
    catch( error ){
        console.log('error deleting request',error)
    }
    }

function* viewJobDetails(action){
    try{
        const jobDetail = yield axios.get(`/api/candidateInfo/detail/${action.payload.id}`);
        console.log('job detail: ', jobDetail.data)
        // yield put({type: 'SET_SAVED_JOBS', payload: savedJobs.data })
    }
    catch(err) {
        console.error('error getting job detail: ', err);
    }
}

function* appliedJobs(){
    console.log('in applied job_post')
    try{
        const appliedJobs = yield axios.get(`/api/candidateInfo/applied`);
        yield put({type: 'SET_JOBS', payload: appliedJobs.data })
    }
    catch(err) {
        console.error('error getting applied jobs: ', err);
    }
}
function* candidateSaga() {
    yield takeLatest('FETCH_RECENT_JOBS', fetchRecentJobs);
    yield takeLatest('SAVE_JOBS', saveJobs);
    yield takeLatest('FETCH_SEARCHED_JOBS', searchJobs);
    yield takeLatest('FETCH_SAVED_JOBS', fetchSavedJobs);
    yield takeLatest('APPLY_JOB', applyJob);
    yield takeLatest('DELETE_JOB', deleteJob);
    yield takeLatest('VIEW_JOB_DETAILS', viewJobDetails);
    yield takeLatest('FETCH_APPLIED_JOBS', appliedJobs);




}

export default candidateSaga