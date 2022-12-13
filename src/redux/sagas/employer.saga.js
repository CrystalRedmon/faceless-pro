import axios from "axios";
import { put, takeEvery } from 'redux-saga/effects';

function* postJob(action){
    console.log('posting job',action.payload)
    try{
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

function* FetchJobs(){
    try{
        const request = yield axios.get('/api/employer');
        console.log('fetch job data',request.data);
        //send to redux
        yield put({
            type: 'SET_JOBS',
            payload: request.data
        })

    } 
    catch (err){
        //on error
        console.error('fetchJob SAGA error:', err);
    };
}
function* employerSaga(){
    yield takeEvery('POST_JOB', postJob);
    yield takeEvery('FETCH_JOBS',FetchJobs)
}


export default employerSaga;