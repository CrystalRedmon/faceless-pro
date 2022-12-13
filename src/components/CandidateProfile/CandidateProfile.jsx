import Breadcrumbs from "../Breadcrumbs/Breadcrumbs";
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { useEffect } from 'react';
import {useSelector} from 'react-redux';


function CandidateProfile(){
    const [profile, setProfile] = useState('');
    const dispatch = useDispatch();
    const history = useHistory();

    const getProfile = (evt) => {
        evt.preventDefault();
        console.log('inside Profile', profile)
        dispatch({
            type: 'GET_PROFILE',
            payload: profile
        })
        history.push('/StartProfile');
    }

    return(
        <>
        <h2>Welcome to your profile!</h2>

        <p>Click here to complete your profile</p>

        <button onClick={getProfile}>Complete Profile</button>

        
        </>
    )
}

export default CandidateProfile;


//Add conditional rendering because they should only be prompted to complete their
//profile if it is incomplete.
//Otherwise it should display their profile with an option to edit