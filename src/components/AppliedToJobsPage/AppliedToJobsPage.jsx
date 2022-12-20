import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
function AppliedToJobsPage() {
    const dispatch = useDispatch();
    const history = useHistory()
    console.log('Jobs applied to:')
    useEffect(() => {
        dispatch({ type: 'FETCH_APPLIED_JOBS' });
    }, []);
    return (
        <h1>AppliedToJobsPage - CANDIDATE</h1>
    );
}

export default AppliedToJobsPage