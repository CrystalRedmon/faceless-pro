import axios from "axios";
import { join, put, takeEvery } from 'redux-saga/effects';

function* postJob(action) {
    // console.log('posting job', action.payload)
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
        // console.log('request.data', requests.data);
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


function* fetchCurrentJobPost(action) {
    try {
        const currentJobPost = yield axios.get(`/api/employer/${action.payload}`);
        // console.log('currentJobPost successful: ', currentJobPost.data);
        yield put({ type: 'SET_CURRENT_JOB_POST', payload: currentJobPost.data })
    }
    catch (err) {
        console.error('fetchCurrentJobPost failed: ', err);
    }
}

function* deleteJobPost(action) {
    try {
        yield axios.delete(`/api/employer/${action.payload}`);
        yield put({ type: 'FETCH_JOBS' });
    }
    catch (err) {
        console.error('deleteJobPost failed ', err);
    }
}

// get the info for job to edit. this will allow current job info to populate fields
function* fetchEditJob(action) {
    try {
        const editJob = yield axios.get(`/api/employer/${action.payload}`);
        // console.log('fetchEditJob successful: ', editJob.data);
        yield put({ type: 'SET_EDIT_JOB', payload: editJob.data })

    }
    catch (err) {
        console.error('fetchEditJob failed ', err);
    }

}

function* saveJob(action) {
    // console.log('so much payload.id ', action.payload.id);
    // console.log('so much payload ', action.payload);
    if (action.payload.id) {
        yield axios.put(`/api/employer/${action.payload.id}`, action.payload);
    }
    else {
        yield axios.post(`/api/employer/`, action.payload);
    }

}

function* fetchApplicants(action) {
    try {
        const response = yield axios.get(`/api/employer/applicants/${action.payload}`);

        yield put({ type: 'SET_APPLICANTS', payload: response.data })

    }
    catch (err) {
        console.error('fetchApplicants failed ', err);
    }
}

function* updateApplicationStatus(action) {
    const applicationId = action.payload.id;
    const newStatus = action.payload.newStatus;
    // console.log('in updateApplicationStatus');
    // console.log('applicationId', applicationId);
    // console.log('newStatus', newStatus);
    try {

        yield axios.put(`/api/employer/status/${applicationId}`, { newStatus });

        yield put({
            type: 'FETCH_APPLICANT',
            payload: applicationId
        });
    }
    catch (err) {
        console.error('updateApplicationStatus failed ', err);
    }
}

function* fetchApplicant(action) {

    try {
        const response = yield axios.get(`/api/employer/applicant/${action.payload}`);

        yield put({
            type: 'SET_APPLICANT_INFO',
            payload: response.data
        });
    }
    catch (err) {
        console.error('fetchApplicant failed ', err);
    }
}


function* JobSaga() {
    yield takeEvery('POST_JOB', postJob);
    yield takeEvery('FETCH_JOBS', FetchJobs);
    yield takeEvery('FETCH_CURRENT_JOB_POST', fetchCurrentJobPost);
    yield takeEvery('DELETE_JOB_POST', deleteJobPost);
    yield takeEvery('FETCH_EDIT_JOB', fetchEditJob);
    yield takeEvery('SAVE_JOB', saveJob);
    yield takeEvery('FETCH_APPLICANTS', fetchApplicants);
    yield takeEvery('UPDATE_APPLICATION_STATUS', updateApplicationStatus);
    yield takeEvery('FETCH_APPLICANT', fetchApplicant);
}


export default JobSaga;