import axios from "axios";
import { put, takeEvery } from 'redux-saga/effects';

function* postJob(action) {
    console.log('posting job', action.payload)
    try {
        //send new item to server then to DB at server
        yield axios.post('/api/employer', action.payload);

        //reset redux and rerender after store is updated
        yield put({
            type: 'FETCH_JOBS',
        });

    } catch (err) {
        console.error('postJob SAGA error:', err);
    }

}

function* FetchJobs() {
    try {
        const requests = yield axios.get('/api/employer');
        console.log('request.data', requests.data);
        //send to redux
        yield put({
            type: 'SET_JOBS',
            payload: requests.data
        })

    }
    catch (err) {
        //on error
        console.error('fetchJob SAGA error:', err);
    };
}


function* fetchCurrentJobPost(action){
    try{
        const currentJobPost = yield axios.get(`/api/employer/${action.payload}`);
        console.log('currentJobPost successful: ', currentJobPost.data)
        yield put({type: 'SET_CURRENT_JOB_POST', payload: currentJobPost.data })
    }
    catch(err) {
        console.error('fetCurrentJobPost failed: ', err);
    }
}




function* JobSaga() {
    yield takeEvery('POST_JOB', postJob);
    yield takeEvery('FETCH_JOBS', FetchJobs);
    yield takeEvery('FETCH_CURRENT_JOB_POST', fetchCurrentJobPost);
}


export default JobSaga;