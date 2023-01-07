import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';


function* addCandidateInfo(action) {
    console.log('in addCandidateInfo with action.payload', action.payload);
    try {
        yield axios.post('/api/candidateProfile', action.payload);
        yield put({ type: 'FETCH_USER' });

    } catch (error) {
        console.log('error in adding to candidate table', error);
    }
}

function* fetchEditCandidate() {

    try {
        const response = yield axios.get('/api/candidateProfile');

        yield put({
            type: 'SET_EDIT_CANDIDATE',
            payload: response.data
        });
    }
    catch (err) {
        console.error(err);
    }
}

function* saveCandidateData(action) {

    const response = yield axios.put('/api/candidateProfile', action.payload);

    console.log(response.data); // OK

    yield put({ type: 'FETCH_CANDIDATE' });
}

function* fetchRecentJobs() {
    try {
        const recentJobs = yield axios.get(`/api/candidateProfile`);
        console.log('Recent jobs GET successful: ', recentJobs.data)
        yield put({ type: 'SET_JOBS', payload: recentJobs.data })
        // yield put({type: 'FETCH_CANDIDATE_INFO'})
    }
    catch (err) {
        console.error('GET recent jobs failed: ', err);
    }
}

function* saveJobs(action) {
    console.log("action.payload is", action.payload);
    try {
        const savedJob = yield axios.post(`/api/candidateProfile/${action.payload.id}`);
        console.log('Save recent jobs POST successful: ', savedJob.data)
        yield put({ type: 'SET_SAVED_JOBS', payload: savedJob.data })
        yield put({ type: 'FETCH_SAVED_JOBS' });
    }
    catch (err) {
        console.error('GET saved jobs failed: ', err);
    }

}

function* searchJobs(action) {
    console.log(action.payload);
    try {
        const keywordSearch = yield axios.get(`/api/candidateProfile/${action.payload}`);
        console.log('keyword search GET successful: ', keywordSearch.data)
        yield put({ type: 'SET_JOBS', payload: keywordSearch.data })
    }
    catch (err) {
        console.error('GET search jobs failed: ', err);
    }
}

function* fetchSavedJobs() {
    console.log('action.payload for fetch saved jobs: ')
    try {
        const savedJobs = yield axios.get(`/api/candidateInfo`);
        console.log('saved jobs GET successful: ', savedJobs.data)
        yield put({ type: 'SET_SAVED_JOBS', payload: savedJobs.data })

    }
    catch (err) {
        console.error('GET recent jobs failed: ', err);
    }
}
function* applyJob(action) {
    console.log('action.payload for applied job: ', action.payload.id)
    try {
        yield axios.post(`/api/candidateInfo/${action.payload.id}/application`)

        yield put({
            type: 'FETCH_SAVED_JOBS'
        })
        yield put({
            type: 'FETCH_APPLIED_JOBS'
            // FETCH APPLIED JOBS AFTER A JOB AS BEEN APPLIED TO ENSURES THE MOST RECENTLY APPLIED JOB APPEARS ON APPLIED JOB PAGE AFTER APPLY CLICKED ON CANDIDATE JOB DETAILS
        })
    }
    catch (error) {
        console.log('error deleting request', error)
    }
}

function* deleteJob(action) {
    console.log('delete action.payload: ', action.payload)
    try {
        yield axios.delete(`/api/candidateInfo/${action.payload.id}`)

        yield put({
            type: 'FETCH_SAVED_JOBS'
        })
        yield put({ type: 'FETCH_SAVED_JOBS' });
    }
    catch (error) {
        console.log('error deleting request', error)
    }
}

function* viewJobDetails(action) {
    try {
        const jobDetail = yield axios.get(`/api/candidateInfo/detail/${action.payload}`);
        console.log('job detail: ', jobDetail.data)
        yield put({ type: 'SET_JOBS', payload: jobDetail.data })
    }
    catch (err) {
        console.error('error getting job detail: ', err);
    }
}

function* appliedJobs() {
    console.log('in applied job_post')
    try {
        const appliedJobs = yield axios.get(`/api/candidateInfo/applied`);
        yield put({ type: 'SET_APPLIED_JOBS', payload: appliedJobs.data })
    }
    catch (err) {
        console.error('error getting applied jobs: ', err);
    }
}

function* addEducation(action) {
    console.log('action.payload Add education', action.payload)
    try {
        yield axios.post(`/api/candidateProfile/education`, action.payload)

    }
    catch (error) {
        console.log('error adding education', error)
    }
}
function* addExperience(action) {
    console.log('action.payload Add experience', action.payload)
    try {
        yield axios.post(`/api/candidateProfile/experience`, action.payload)
    }
    catch (error) {
        console.log('error adding education', error)
    }
}
function* addSkill(action) {
    console.log('action.payload Add skill', action.payload)
    try {
        yield axios.post(`/api/candidateProfile/skill`, action.payload)
    }
    catch (error) {
        console.log('error adding skill', error)
    }
}

function* addHyperLink(action) {
    console.log('action.payload Add HyperLink', action.payload)
    try {
        yield axios.post(`/api/candidateProfile/hyperlink`, action.payload)
    }
    catch (error) {
        console.log('error adding hyperlink', error)
    }
}
function* addProfile(action) {
    console.log('action.payload Add profile', action.payload)
    try {
        yield axios.post(`/api/candidateProfile/profile`, action.payload)
    }
    catch (error) {
        console.log('error adding profile info', error)
    }
}

function* fetchMessage(action) {
    console.log('payload for message', action.payload)
    try {
        const messages = yield axios.get(`/api/message/${action.payload}`);
        yield put({ type: 'SET_MESSAGE', payload: messages.data })
    }
    catch (err) {
        console.error('error getting applied jobs: ', err);
    }
}

function* addMessage(action) {
    console.log('action.payload addMessage', action.payload)
    try {
        yield axios.post(`/api/message`, action.payload)
    }
    catch (error) {
        console.log('error adding message', error)
    }
}

function* shareInfo(action) {
    console.log('action. payload for shareInfo:', action.payload)
    try {
        yield axios.put(`/api/candidateInfo/info/${action.payload}`)

        yield put({
            type: 'FETCH_APPLIED_JOBS'
            // FETCH APPLIED JOBS AFTER A JOB AS BEEN APPLIED TO ENSURES THE MOST RECENTLY APPLIED JOB APPEARS ON APPLIED JOB PAGE AFTER APPLY CLICKED ON CANDIDATE JOB DETAILS
        })
    }
    catch (error) {
        console.log('error adding message', error)
    }
}

function* updateInfo(action) {
    console.log('action. payload for shareInfo:', action.payload)

    try {
        yield axios.put(`/api/candidateInfo/info`, action.payload);

        yield put({ type: 'FETCH_USER' });
    }
    catch (error) {
        console.log('error updating profile info', error)
    }


}

function* candidateInfo(action) {
    console.log('action. payload for candidate Info:', action)
    try {
        const info = yield axios.get(`/api/candidateInfo/info`)
        yield put({ type: 'SET_EDIT_PROFILE', payload: info.data })

    }
    catch (error) {
        console.log('error adding message', error)
    }
}

function* fetchEducation() {
    try {
        const education = yield axios.get(`/api/candidateProfile/education`)
        yield put({ type: 'SET_EDUCATION', payload: education.data })

    }
    catch (error) {
        console.log('error adding message', error)
    }
}

function* uploadResume(action) {
    // console.log('in uploadResume saga');
    // console.log('file info payload', action.payload[0]);
    let formData = new FormData();

    formData.append('uploaded_file', action.payload[0]);
    try {
        const response = yield axios.post('/api/resume', formData, {
            headers: {
                headers: { "Content-Type": "multipart/form-data" }
            }
        })
        console.log(response.data);
    }
    catch (err) {
        console.error(err);
    }
}

function* uploadCoverLetter(action) {
    // console.log('in uploadCoverLetter saga');
    // console.log('file info payload', action.payload[0]);
    let formData = new FormData();

    formData.append('uploaded_file', action.payload[0]);
    try {
        const response = yield axios.post('/api/coverLetter', formData, {
            headers: {
                headers: { "Content-Type": "multipart/form-data" }
            }
        })
        console.log(response.data);
    }
    catch (err) {
        console.error(err);
    }
}

function* fetchCandidateProfileInfo() {
    
    try {
        const candidateProfileInfo = yield axios.get(`/api/candidateProfile/profile`);
        yield put({ type: 'SET_CANDIDATE_PROFILE_INFO', payload: candidateProfileInfo.data });
    }
    catch (error) {
        console.log('error adding message', error)
    }
}


function* candidateSaga() {
    yield takeLatest('ADD_CANDIDATE_INFO', addCandidateInfo);
    yield takeLatest('FETCH_EDIT_CANDIDATE', fetchEditCandidate);
    yield takeLatest('SAVE_CANDIDATE_DATA', saveCandidateData);
    yield takeLatest('FETCH_RECENT_JOBS', fetchRecentJobs);
    yield takeLatest('SAVE_JOBS', saveJobs);
    yield takeLatest('FETCH_SEARCHED_JOBS', searchJobs);
    yield takeLatest('FETCH_SAVED_JOBS', fetchSavedJobs);
    yield takeLatest('APPLY_JOB', applyJob);
    yield takeLatest('DELETE_JOB', deleteJob);
    yield takeLatest('VIEW_JOB_DETAILS', viewJobDetails);
    yield takeLatest('FETCH_APPLIED_JOBS', appliedJobs);
    yield takeLatest('ADD_EDUCATION', addEducation);
    yield takeLatest('ADD_EXPERIENCE', addExperience);
    yield takeLatest('ADD_SKILL', addSkill);
    yield takeLatest('ADD_HYPERLINK', addHyperLink);
    yield takeLatest('ADD_PROFILE', addProfile);
    yield takeLatest('FETCH_MESSAGES', fetchMessage);
    yield takeLatest('ADD_MESSAGE', addMessage);
    yield takeLatest('SHARE_INFO', shareInfo);
    yield takeLatest('FETCH_CANDIDATE_INFO', candidateInfo);
    yield takeLatest('UPDATE_PROFILE', updateInfo);
    yield takeLatest('FETCH_EDUCATION', fetchEducation);
    yield takeLatest('EDIT_RESUME', uploadResume);
    yield takeLatest('EDIT_COVER_LETTER', uploadCoverLetter);
    yield takeLatest('FETCH_CANDIDATE_PROFILE_INFO', fetchCandidateProfileInfo);
}

export default candidateSaga